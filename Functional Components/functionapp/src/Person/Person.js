import React  from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (min-width : 500px)': {
            width: '500px'
        }
    }
    return (
        <div className="Person" style= {style}>
        <h1 onClick = {props.click}> I am {props.name} and i am { props.age } years old </h1>
        <p> { props.children }</p>
        <input type="text" onChange = {props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);

/*
 This is a functional Component also i guess names as Pure Component
 
 You cant use state here 
 You will just use props 
 For this We use React hooks


*/