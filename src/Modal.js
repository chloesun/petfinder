import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  //if not doing this, will have memory leak and will
  //crash your browser eventually
  //componentwillunmount to clean up memory, remove
  //event listensers..etc
  componentWillUnmount() {
    modalRoot.replaceChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
