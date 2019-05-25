import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state =  {
    persons : [
      {name: 'Raj' , age :21},
      {name: 'Muthu', age : 20},
      {name: 'Jai', age : 10}
    ],
    guys : {
      "name":"SinghSaab"
    }
  };

  switchNameHandler = (qualifiedName) => {
    console.log("clicked")
    this.setState ( {
      persons : [
        {name: qualifiedName , age :21},
        {name: 'Muthu Subba', age : 20},
        {name: 'JaiSinghaa', age : 10}
      ]
    });
    /* React wont override the state which are not changed , it will just update the one which is change */
  }

  nameChangeHandler = (event) => {
    this.setState ( {
      persons : [
        {name: 'Rajat Babu' , age :21},
        {name: 'okok', age : 20},
        {name:  event.target.value, age : 10}
      ]
    });
  }


  render() {

    const buttonStyle = {
      backgroundColor : 'green',
      padding: '8px',
      marginTop: '12px'
    };
    return (
      <div className="App">
     <h1>Hello I am Maxmillar</h1>

     <button style = {buttonStyle} onClick = {this.switchNameHandler.bind(this , 'Saajan Saajan')}>Switch Name </button> 
     <Person age={this.state.persons[0].age} name={this.state.persons[0].name}/>
     <Person age={this.state.persons[1].age} name={this.state.persons[1].name}/>
     <Person changed = {this.nameChangeHandler} age={this.state.persons[2].age} name={this.state.persons[2].name}
     click = { () =>  this.switchNameHandler('Thoran')}
     >
      This is test !!!
     </Person>
     {this.state.guys.name}
      </div>
    );
  }
}

export default App;

/*
  This  is not a functional Component , 
  State is a special variable , which can be used only extends Component here


*/