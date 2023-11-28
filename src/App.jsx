
import React, {Component} from 'react';
import './App.css'
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

class App extends Component {
  state = { 
    league: league,
    plus: 2,
    isShow: false
   }

   componentDidMount() {
    console.log('montage')
   }

   componentDidUpadate() {
    console.log('je recharge mon composant')
   }

   componentWillUnmount() {
    console.log('démontage')
   }

  handleClick = (nb) =>{
    const league = {...this.state.league}
    league.membre1.age +=nb
    this.setState({league})
  } 

  handleShow = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }

  render() { 
    // Il va me faire un tableau
    const list = Object.keys(this.state.league).map(iteration => {

      return (
        // Il va aller voir dans league, s'il y a qqchose qui s'appelle "iteration".
        // On met "key", au singulier car au-dessus au pluriel mais en-dessous, il veut que chaque objet est unique, donc c'est comme s'il avait un index, donc on met au singulier, au sinon, conflit avec celui du desssus. 
        <Membre key={iteration} age={this.state.league[iteration].age} nom={this.state.league[iteration].nom}/>
      )
    })

    return (
      <>
        <h1>Hello World!</h1>
        {list}
        <Membre
        age="50"
        nom="Jordan"
        >
          
          <strong>Je suis le goat</strong>

          <button>
            {this.state.isShow ? 'Cacher' : 'Montrer'}
          </button>
        </Membre>

        <Button 
          plus={this.state.plus}
          veillir={() => this.handleClick(this.state.plus)}
        />
      </>
    )
  }
}

export default App;