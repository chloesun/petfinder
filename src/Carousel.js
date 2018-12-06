import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0
    };
  }

  //everytime props change, you can update the state
  //static, only stay in the class level, not each instance
  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos.photo && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return { photos: photos };
  }

  //arrow function, no need to bind, no new scope
  handleIndexClick = event => {
    this.setState({
      //+ turns a string into a number
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              /*eslint-disable-next-line*/
              <img
                onClick={this.handleIndexClick}
                key={photo.value}
                data-index={index}
                scr={photo.value}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
