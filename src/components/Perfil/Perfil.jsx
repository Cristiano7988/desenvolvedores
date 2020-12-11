import React, { Component } from "react";
import { ReactComponent as SeguidoresIcon } from "../../assets/img/seguidores.svg";
import { ReactComponent as ProjetosIcon } from "../../assets/img/projetos.svg";
import { ReactComponent as SeguindoIcon } from "../../assets/img/seguindo.svg";
import { ReactComponent as PerfilIcon } from "../../assets/img/perfil.svg";

class Perfil extends Component {
  state = {
    exibirProjetos: false,
  };
  exibeBio() {
    this.setState({ exibirProjetos: false });
  }
  exibeProjetos() {
    this.setState({ exibirProjetos: true });
  }
  formata(numero) {
        const formatado = JSON.stringify(numero).length > 3 ? parseFloat(numero.toLocaleString()).toFixed(1)+'K' : numero
        return formatado
  }
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
                  {this.props.login}
                </div>
              </div>
            </div>
          </div>
          <div className="container-menu">
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
        </header>
        <nav className="container-abas">
          <div onClick={this.exibeBio.bind(this)}>Sobre</div>
          <div onClick={this.exibeProjetos.bind(this)}>Projetos</div>
        </nav>
        {this.state.exibirProjetos ? <div>Exibe</div> : <div>Não exibe</div>}
      </div>
    );
  }
}

export default Perfil;
