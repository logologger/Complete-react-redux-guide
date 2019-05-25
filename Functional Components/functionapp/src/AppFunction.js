import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () =>  {

 const [personState , setPersonState ] =  useState({
    persons : [
      {name: 'Raj' , age :21},
      {name: 'Muthu', age : 20},
      {name: 'Jai', age : 10}
    ],
    guys : {
      "name":"SinghSaab"
    }
  });

  const [otherState,setOtherState] = useState('This is my Other')

  const switchNameHandler = () => {
    console.log("clicked")
    setPersonState ( {
      persons : [
        {name: 'Rajat' , age :21},
        {name: 'Muthu Subba', age : 20},
        {name: 'JaiSinghaa', age : 10}
      ]
    });
    /* React wont override the state which are not changed , it will just update the one which is change */
  }



    return (
      <div className="App">
        <h1>Hello I am Maxmillar</h1>

        <button onClick = {switchNameHandler}>Switch Name </button> 
        <Person age={personState.persons[0].age} name={personState.persons[0].name}/>
        <Person age={personState.persons[1].age} name={personState.persons[1].name}/>
        <Person age={personState.persons[2].age} name={personState.persons[2].name}>
        This is test !!!
        </Person>
        {otherState}
       
      </div>
    );

}

export default app;

