import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

//petfinder api client
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

console.log(petfinder);

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    //this returns a promise, it is an object that represents a future value
    //that is goig to be coming, this takes time to go out to API, get the list
    //of breads for dogs and come back
    // const promise = petfinder.breed.list({ animal: "dog" });
    //if success, log whatever data we got from the api, otherwise, error message
    // promise.then(console.log, console.error);

    petfinder.pet
      .find({ location: "Seattle, WA", output: "full" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      });
  }

  handleTitleClick() {
    alert("you clicked this title");
  }

  render() {
    return (
      <div className="search">
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city},${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
