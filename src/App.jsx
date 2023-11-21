// ici, on a appelé "fragment", pour faire en sorte q'uen dessous, on ne doive pas faire une "div".
import React, {Component, Fragment} from 'react';

// Si je veux ma CSS
import './App.css'

// On a importer "Membre"... qui vient de "index.js".
import Membre from './components/Membre';
import Button from './components/Button';

const league = {
   membre1: {
    nom: 'Batman',
    age: 48
   },
   membre2: {
    nom: 'Superman',
    age: 46
   },
   membre3: {
    nom: 'Wonder Woman',
    age: 79
   },
   membre4: {
    nom: 'Catwoman',
    age: 33
   }
}

// Cette classe extends, donc elle hérite de "component".
// Raccourci pour avoir tt ça ==> "cc App".
class App extends Component {
// variable d'état, le composant va se recharger, c'est une csorte de storage et je mets les objets dedans et puis on pourra l'utiliser et le modifier.
  // Ici, mon composant se recharge, sans que je lui dise de le faire... c'est lui qui regarde, s'il y a une modification et lui modifie si nécessaire...
  // Ecouteur d'évènement...

  state = { 
    league: league,
    plus: 2
   }

  handleClick = (nb) =>{
    const league = {...this.state.league}
    league.membre1.age +=nb
    this.setState({league})
  } 

  // render = comme si c'était du rendu.
  render() { 
        // Si je veux un rendu (un return)
    // Donc ici, comme on a appelé "fragment" en haut, on met fragment au lieu de div et on peut englobé le "h1".
    // Et on peut par la suite de ne pas mettre "fragment".

    return (
      <>
        <h1>Hello World!</h1>
        <Membre 
          nom={this.state.league.membre1.nom} 
          age={this.state.league.membre1.age}
          />
        <Membre 
          nom={this.state.league.membre2.nom} 
          age={this.state.league.membre2.age}
          />
        <Membre 
          nom={this.state.league.membre3.nom} 
          age={this.state.league.membre3.age}
          />
        <Membre 
          nom={this.state.league.membre4.nom} 
          age={this.state.league.membre4.age}
          />


        <Button 
          plus={this.state.plus}
          veillir={() => this.handleClick(this.state.plus)}
        />

      </>
    )
   // return React.createElement('div',{className: 'app'}, React.createElement('h1',null,'Hello World'))
  }
}

export default App;