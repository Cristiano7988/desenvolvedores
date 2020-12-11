import React, { Component } from "react";
import Perfil from "../Perfil";
import "./estilo.css";

class Lista extends Component {
  state = {
    exibirLista: true,
  };

  exibeDesenvolvedor(e) {
    fetch(e.target.attributes.dados.value)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((r) => {
        this.setState({
          exibirLista: false,
          avatar: r.avatar_url,
          nome: r.name,
          login: r.login,
          seguindo: r.following,
          projetos: r.public_repos,
          seguidores: r.followers,
          bio: r.bio,
          blog: r.blog,
          cidade: r.location
        });
      });
  }

  render() {
    return this.state.exibirLista ? (
      <div className="container-lista">
        <input type="text" placeholder="Pesquisar..." />
        {this.props.lista.map((desenvolvedor, index) => {
          return (
            <a
              dados={desenvolvedor.url}
              className="desenvolvedor"
              onClick={this.exibeDesenvolvedor.bind(this)}
              key={index}
            >
              <div className="container-img">
                <img src={desenvolvedor.avatar_url} />
              </div>
              <div className="login">{desenvolvedor.login}</div>
            </a>
          );
        })}
      </div>
    ) : (
      <Perfil
        avatar={this.state.avatar}
        nome={this.state.nome}
        login={this.state.login}
        seguidores={this.state.seguidores}
        projetos={this.state.projetos}
        seguindo={this.state.seguindo}
        bio={this.state.bio}
        blog={this.state.blog}
        cidade={this.state.cidade}
      />
    );
  }
}

export default Lista;
