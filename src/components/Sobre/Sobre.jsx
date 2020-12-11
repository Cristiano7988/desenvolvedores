import React, { Component } from "react";
import { ReactComponent as BlogIcon } from "../../assets/img/blog.svg";
import { ReactComponent as CidadeIcon } from "../../assets/img/cidade.svg";

class Sobre extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.bio ? <div>Bio: {this.props.bio}</div> : ""}
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
      </>
    );
  }
}

export default Sobre;
