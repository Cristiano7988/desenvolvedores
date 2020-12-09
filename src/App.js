import GitLogo from "./components/GitLogo";
import "./assets/App.css";
import { Component } from "react";

class App extends Component {
  verTodos() {
    fetch("https://api.github.com/users")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((r) => {
        console.log(r);
      });
  }

  render() {
    return (
      <section className="main-section">
        <GitLogo />
        <h1>GitSearch</h1>
        <input type="text" placeholder="Pesquisar..." />
        <div className="btn-container">
          <button className="btn ver-todos" onClick={this.verTodos}>
            Ver Todos
          </button>
          <button className="btn buscar">Buscar</button>
        </div>
      </section>
    );
  }
}

export default App;
