// ici, on a appelé "fragment", pour faire en sorte q'uen dessous, on ne doive pas faire une "div".
import React, { Component, Fragment } from "react";

// Si je veux ma CSS
import "./App.css";

const league = {
  membre1: {
    nom: "Batman",
    age: 48,
  },
  membre2: {
    nom: "Superman",
    age: 46,
  },
  membre3: {
    nom: "Audrey",
    age: 36,
  },
};

// Cette classe extends, donc elle hérite de "component".
// Raccourci pour avoir tt ça ==> "cc App".
class App extends Component {
  // variable d'état, le composant va se recharger, c'est une csorte de storage et je mets les objets dedans et puis on pourra l'utiliser et le modifier.
  // Ici, mon composant se recharge, sans que je lui dise de le faire... c'est lui qui regarde, s'il y a une modification et lui modifie si nécessaire...
  // Ecouteur d'évènement...
  state = {
    league: league,
  };

  // render = comme si c'était du rendu.
  render() {
    // Si je veux un rendu (un return)
    return (
      // Donc ici, comme on a appelé "fragment" en haut, on met fragment au lieu de div et on peut englobé le "h1".
      // Et on peut par la suite de ne pas mettre "fragment".
      <>
        <h1>hello World</h1>;<h1>hello World</h1>;
      </>
    );
  }
}

export default App;
