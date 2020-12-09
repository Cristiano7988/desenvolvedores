import GitLogo from "./components/GitLogo";
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

  render() {
    return this.state.exibirTodos ? (
      <>
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
