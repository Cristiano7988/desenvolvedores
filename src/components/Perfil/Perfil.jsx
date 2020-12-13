import React, { Component } from "react";
import Sobre from "../Sobre";
import Projetos from "../Projetos";

import { ReactComponent as SeguidoresIcon } from "../../assets/img/seguidores.svg";
import { ReactComponent as ProjetosIcon } from "../../assets/img/projetos.svg";
import { ReactComponent as SeguindoIcon } from "../../assets/img/seguindo.svg";
import { ReactComponent as PerfilIcon } from "../../assets/img/perfil.svg";
class Perfil extends Component {
  state = {
    exibirProjetos: false,
    projetos: [],
  };
  exibeBio() {
    this.setState({ exibirProjetos: false });
  }
  exibeProjetos(e) {
    fetch(e.target.dataset.url)
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((r) => {
        this.setState({ projetos: r });
      });
    this.setState({ exibirProjetos: true });
  }
  formata(numero) {
    const formatado =
      JSON.stringify(numero).length > 3
        ? parseFloat(numero.toLocaleString()).toFixed(1) + "K"
        : numero;
    return formatado;
  }
  render() {
    return (
      <div className="container-perfil">
        <header>
          <div className="container-img">
            <div className="item">
              <img src={this.props.avatar} />
              <div className="titulo">
                <h3>{this.props.nome}</h3>
                <div className="perfil-item">
                  <PerfilIcon />
                  <span>{this.props.login}</span>
                </div>
              </div>
            </div>
            <div className="container-menu item">
              <div className="container-item">
                <div>
                  <SeguindoIcon />
                  <span>{this.formata(this.props.seguindo)}</span>
                </div>
                <div>Seguindo</div>
              </div>
              <div className="container-item">
                <div>
                  <ProjetosIcon />
                  <span>{this.formata(this.props.projetos)}</span>
                </div>
                <div>Projetos</div>
              </div>
              <div className="container-item">
                <div>
                  <SeguidoresIcon />
                  <span>{this.formata(this.props.seguidores)}</span>
                </div>
                <div>Seguidores</div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <nav className="container-abas">
            <div onClick={this.exibeBio.bind(this)}>Sobre</div>
            <div
              data-url={this.props.url}
              onClick={this.exibeProjetos.bind(this)}
            >
              Projetos
            </div>
          </nav>
          {this.state.exibirProjetos ? (
            <Projetos projetos={this.state.projetos} />
          ) : (
            <Sobre
              bio={this.props.bio}
              blog={this.props.blog}
              cidade={this.props.cidade}
            />
          )}
        </section>
      </div>
    );
  }
}

export default Perfil;
