import React, { Component } from "react";
import { ReactComponent as BlogIcon } from "../../assets/img/blog.svg";
import { ReactComponent as CidadeIcon } from "../../assets/img/cidade.svg";

class Sobre extends Component {
  state = {};
  render() {
    return (
      <div className="container-sobre">
        {this.props.bio ? (
          <div>
            <b>Bio</b>
            <p>{this.props.bio}</p>
          </div>
        ) : (
          ""
        )}
        {this.props.cidade ? (
          <div>
            <CidadeIcon />
            <span>{this.props.cidade}</span>
          </div>
        ) : (
          ""
        )}
        {this.props.blog ? (
          <div>
            <BlogIcon />
            <span>{this.props.blog}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Sobre;
