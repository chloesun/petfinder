import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";
import Carousel from "./Carousel";
import Modal from "./Modal";

//petfinder api client
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  constructor(props) {
    super(props);

    //when you load for the first time, you are loding
    //when render for the first time, no data back form api
    this.state = {
      loading: true,
      showModal: true
    };
  }

  toggleModal = () =>
    this.setState({
      showModal: !this.state.showModal
    });

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city},${pet.contact.state}`,
          media: pet.media,
          breed: breed,
          loading: false
        });
      }) //catch on the promise, if error go to index page
      .catch(() => {
        navigate("/");
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const {
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;
    console.log(description);
    console.log(animal);
    console.log(media);

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} -{breed} - {location}
          </h2>
          <button onClick={this.toggleModal}> Adopt {name} </button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1> Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.toggleModal}>Yes</button>
                <button onClick={this.toggleModal}>Definitely Yes</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;
