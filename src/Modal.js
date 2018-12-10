import React from "react";
import { createPortal } from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  //anything you do inside of componnetdidmount is garanteed in
  //browser context, anything you do in browser-based can be thrown
  //into componentDidMount()
  componentDidMount() {
    this.modalRoot = document.getElementById("modal");
    this.modalRoot.appendChild(this.el);
    this.el = document.createElement("div");
  }

  //if not doing this, will have memory leak and will
  //crash your browser eventually
  //componentwillunmount to clean up memory, remove
  //event listensers..etc
  componentWillUnmount() {
    this.modalRoot.replaceChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
