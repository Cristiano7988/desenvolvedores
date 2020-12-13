import React, { Component } from "react";

class Lista extends Component {
  _exibeDesenvolvedor(e) {
    this.props.exibeDesenvolvedor(e.target.dataset.url);
  }

  _buscar() {
    this.props.buscar();
  }

  render() {
    return (
      <div className="container-lista">
        <div className="busca">
          <h2>Search Results</h2>
          <input
            type="text"
            id="campo-busca"
            onChange={this._buscar.bind(this)}
            placeholder="Pesquisar..."
          />
        </div>
        <div className="resultados">
          {this.props.lista.map((desenvolvedor, index) => {
            return (
              <a
                data-url={desenvolvedor.url}
                className="desenvolvedor"
                onClick={this._exibeDesenvolvedor.bind(this)}
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
      </div>
    );
  }
}

export default Lista;
