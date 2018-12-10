import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  private el = document.createElement("div");

  //anything you do inside of componnetdidmount is garanteed in
  //browser context, anything you do in browser-based can be thrown
  //into componentDidMount()
  componentDidMount() {
    if (modalRoot) modalRoot.appendChild(this.el);
  }

  //if not doing this, will have memory leak and will
  //crash your browser eventually
  //componentwillunmount to clean up memory, remove
  //event listensers..etc
  componentWillUnmount() {
    if (modalRoot) modalRoot.removeChild(this.el);
  }
  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
