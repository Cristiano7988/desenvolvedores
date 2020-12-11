import React, { Component } from "react";
import "./estilo.css";

class Lista extends Component {
  state = {
    exibirLista: true,
  };

  exibeDesenvolvedor(e) {
    this.setState({
      exibirLista: false,
      avatar: e.target.attributes.avatar.value,
      nome: e.target.attributes.login.value,
      seguindo: e.target.attributes.seguindo.value.replace("{/other_user}", "")
        .length,
      projetos: e.target.attributes.projetos.value.length,
      seguidores: e.target.attributes.seguidores.value.length,
    });
  }

  render() {
    return this.state.exibirLista ? (
      <div className="container-lista">
        <input type="text" placeholder="Pesquisar..." />
        {this.props.lista.map((desenvolvedor, index) => {
          return (
            <a
              avatar={desenvolvedor.avatar_url}
              login={desenvolvedor.login}
              seguindo={desenvolvedor.following_url}
              projetos={desenvolvedor.repos_url}
              seguidores={desenvolvedor.followers_url}
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
      <div>
        <header>
          <img src={this.state.avatar} />
          <div>{this.state.nome}</div>
          <div>{this.state.seguindo} Seguindo</div>
          <div>{this.state.projetos} Projetos</div>
          <div>{this.state.seguidores} Seguidores</div>
        </header>
      </div>
    );
  }
}

export default Lista;
