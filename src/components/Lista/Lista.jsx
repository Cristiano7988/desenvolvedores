import React, { Component } from "react";
import "./estilo.css";

class Lista extends Component {
  render() {
    return (
      <div className="container-lista">
        <div className="container-titulo">
          <h1>Lista de Usuários</h1>
        </div>
        {this.props.lista.map((desenvolvedor, index) => {
          return (
            <a className="desenvolvedor" href={desenvolvedor.html_url} key={index}>
              <div className="container-img">
                <img src={desenvolvedor.avatar_url} />
              </div>
              <div className="login">{desenvolvedor.login}</div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Lista;
