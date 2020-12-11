import React, { Component } from "react";
import { ReactComponent as SeguidoresIcon } from "../../assets/img/seguidores.svg";
import { ReactComponent as ProjetosIcon } from "../../assets/img/projetos.svg";
import { ReactComponent as SeguindoIcon } from "../../assets/img/seguindo.svg";
import { ReactComponent as PerfilIcon } from "../../assets/img/perfil.svg";

class Perfil extends Component {
  state = {};
  render() {
    return (
      <div className="container-perfil">
        <header>
          <div className="container-img">
            <div>
              <img src={this.props.avatar} />
              <div>{this.props.nome}</div>
              <div className="perfil-item">
                <div>
                  <PerfilIcon />
                  {this.props.nome}
                </div>
              </div>
            </div>
          </div>
          <div className="container-menu">
            <div className="container-item">
              <div>
                <SeguindoIcon />
                {this.props.seguindo}
              </div>
              <div>Seguindo</div>
            </div>
            <div className="container-item">
              <div>
                <ProjetosIcon />
                {this.props.projetos}
              </div>
              <div>Projetos</div>
            </div>
            <div className="container-item">
              <div>
                <SeguidoresIcon />
                {this.props.seguidores}
              </div>
              <div>Seguidores</div>
            </div>
          </div>
        </header>
        <nav className="container-abas">
          <div>Sobre</div>
          <div>Projetos</div>
        </nav>
      </div>
    );
  }
}

export default Perfil;
