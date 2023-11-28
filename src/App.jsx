import React, {Component, Fragment} from 'react';
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
   },
   membre5: {
    nom: "Robin",
    age: 25
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

   componentDidUpdate() {
    console.log('je recharge mon composant')
   }

   componentWillUnmount()
   {
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
    const list = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre key={iteration} age={this.state.league[iteration].age} nom={this.state.league[iteration].nom} />
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
          {
            this.state.isShow ? <strong>Je suis le GOAT</strong> :  null
          }
          
          <button onClick={this.handleShow}>
            {this.state.isShow ? 'Cacher' : 'Montrer'}
          </button>

        </Membre>
   
        

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