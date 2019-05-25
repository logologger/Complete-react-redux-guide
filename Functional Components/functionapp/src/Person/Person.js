import React  from 'react';

const person = (props) => {
    return (
        <div>
        <h1 onClick = {props.click}> I am {props.name} and i am { props.age } years old </h1>
        <p> { props.children }</p>
        </div>
    )
}

export default person;

/*
 This is a functional Component also i guess names as Pure Component
 
 You cant use state here 
 You will just use props 
 For this We use React hooks


*/