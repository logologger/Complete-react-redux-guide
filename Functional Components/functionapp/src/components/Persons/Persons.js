import React from 'react';

import Person from './Person/Person';


const persons  = (props) => props.persons.map( (person, index) => {
        return  <Person 
        click={props.clicked.bind(this, index)}
        key = {index}  
        changed = {(event) => { props.changed(event, index)}}
        name = {person.name}
        age = {person.age}/>
   
})


export default persons;