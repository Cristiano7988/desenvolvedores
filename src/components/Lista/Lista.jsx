import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as SeguidoresIcon } from "../../assets/img/seguidores.svg";
import { ReactComponent as ProjetosIcon } from "../../assets/img/projetos.svg";
import { ReactComponent as SeguindoIcon } from "../../assets/img/seguindo.svg";
import { ReactComponent as PerfilIcon } from "../../assets/img/perfil.svg";

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
      <div className="container-perfil">
        <header>
          <div className="container-img">
            <div>
              <img src={this.state.avatar} />
              <div>{this.state.nome}</div>
              <div className="perfil-item">
                <div>
                  <PerfilIcon />
                  {this.state.nome}
                </div>
              </div>
            </div>
          </div>
          <div className="container-menu">
            <div className="container-item">
              <div>
                <SeguindoIcon />
                {this.state.seguindo}
              </div>
              <div>Seguindo</div>
            </div>
            <div className="container-item">
              <div>
                <ProjetosIcon />
                {this.state.projetos}
              </div>
              <div>Projetos</div>
            </div>
            <div className="container-item">
              <div>
                <SeguidoresIcon />
                {this.state.seguidores}
              </div>
              <div>Seguidores</div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Lista;
