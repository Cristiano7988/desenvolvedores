import React, { Component } from "react";

class Projetos extends Component {
  render() {
    return (
      <div className="projetos">
        {this.props.projetos.map((dado, index) => {
          return (
            <div key={index} className="container-projeto">
              <div className="projeto-content">
                {dado.name ? <h3>{dado.name}</h3> : <h3>[Sem-nome]</h3>}
                {dado.description ? <p>{dado.description}</p> : ""}
              </div>
              <div className="projeto-info">
                {dado.language ? (
                  <span className={dado.language.replace("++", "")}>
                    <i className="dot"></i>
                    {dado.language}
                  </span>
                ) : (
                  ""
                )}
                <span>
                  Atualizado em
                  <span> {new Date(dado.updated_at).toLocaleString().split(" ")[0]}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projetos;
