import { ReactComponent as GitLogo } from "./assets/img/gitLogo.svg";
import { ReactComponent as Back } from "./assets/img/back.svg";
import "./assets/App.css";
import { Component } from "react";
import Lista from "./components/Lista";

class App extends Component {
  constructor() {
    super();
    this.lista = [];
    this.state = {
      exibirTodos: false,
      lista: [],
    };
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
          this.setState({ exibirTodos: true });
          this.setState({ lista: desenvolvedores });
        }
      });
  }

  retornar() {
    this.setState({ exibirTodos: false });
  }

  render() {
    return this.state.exibirTodos ? (
      <>
        <div className="container-titulo">
          <Back onClick={this.retornar.bind(this)} />
          <h1>Lista de Usuários</h1>
        </div>
        <Lista lista={this.state.lista} />
      </>
    ) : (
      <section className="main-section">
        <GitLogo />
        <h1>GitSearch</h1>
        <input type="text" placeholder="Pesquisar..." />
        <div className="btn-container">
          <button className="btn ver-todos" onClick={this.verTodos.bind(this)}>
            Ver Todos
          </button>
          <button className="btn buscar">Buscar</button>
        </div>
      </section>
    );
  }
}

export default App;
