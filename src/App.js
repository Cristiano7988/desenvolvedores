import { ReactComponent as GitLogo } from "./assets/img/gitLogo.svg";
import { ReactComponent as GitLogoShort } from "./assets/img/gitLogoShort.svg";
import { ReactComponent as Back } from "./assets/img/back.svg";
import { Component } from "react";
import Lista from "./components/Lista";
import Perfil from "./components/Perfil";

class App extends Component {
  state = {
    navegacao: false,
    exibirTodos: false,
    lista: [],
    perfil: false,
    desenvolvedor: "",
  };

  exibeDesenvolvedor(url) {
    fetch(url)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((r) => {
        this.setState({
          exibirTodos: false,
          perfil: true,
          navegacao: "Perfil",
          desenvolvedor: {
            avatar: r.avatar_url,
            nome: r.name,
            login: r.login,
            seguindo: r.following,
            projetos: r.public_repos,
            seguidores: r.followers,
            bio: r.bio,
            blog: r.blog,
            cidade: r.location,
            url: r.repos_url,
          },
        });
      });
  }

  verTodos() {
    fetch("https://api.github.com/users")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((desenvolvedores) => {
        if (desenvolvedores) {
          this.setState({
            exibirTodos: true,
            lista: desenvolvedores,
            navegacao: "Lista de usuários",
          });
        }
      });
  }

  retornar() {
    this.setState({
      navegacao: false,
      exibirTodos: false,
    });
  }

  buscar() {
    fetch("https://api.github.com/users")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((r) => {
        let lista = r.map((i) => {
          return i.login;
        });
        let urls = r.map((i) => {
          return i.url;
        });
        let input = document.querySelector("#campo-busca").value.toLowerCase();

        if (lista.indexOf(input) !== -1) {
          this.exibeDesenvolvedor(urls[lista.indexOf(input)]);
        }
      });
  }

  render() {
    return (
      <>
        {this.state.navegacao ? (
          <>
            <div className="container-titulo">
              <div className="not-mobile-header">
                <GitLogoShort />
                <h1>GitSearch</h1>
              </div>
              <div className="mobile-header">
                <Back onClick={this.retornar.bind(this)} />
                <h1>{this.state.navegacao}</h1>
              </div>
            </div>
            {this.state.exibirTodos ? (
              <Lista
                buscar={this.buscar.bind(this)}
                exibeDesenvolvedor={this.exibeDesenvolvedor.bind(this)}
                lista={this.state.lista}
              />
            ) : (
              ""
            )}
            {this.state.perfil ? (
              <Perfil
                url={this.state.desenvolvedor.url}
                avatar={this.state.desenvolvedor.avatar}
                nome={this.state.desenvolvedor.nome}
                login={this.state.desenvolvedor.login}
                seguidores={this.state.desenvolvedor.seguidores}
                projetos={this.state.desenvolvedor.projetos}
                seguindo={this.state.desenvolvedor.seguindo}
                bio={this.state.desenvolvedor.bio}
                blog={this.state.desenvolvedor.blog}
                cidade={this.state.desenvolvedor.cidade}
              />
            ) : (
              ""
            )}
          </>
        ) : (
          <section className="main-section">
            <GitLogo />
            <h1>GitSearch</h1>
            <input type="text" placeholder="Pesquisar..." id="campo-busca" />
            <div className="btn-container">
              <button
                className="btn ver-todos"
                onClick={this.verTodos.bind(this)}
              >
                Ver Todos
              </button>
              <button className="btn buscar" onClick={this.buscar.bind(this)}>
                Buscar
              </button>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default App;
