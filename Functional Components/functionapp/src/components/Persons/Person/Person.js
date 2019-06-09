// import React  from 'react';
// import './Person.css';

// const person = (props) => {

    
   
   
//     return (
//         <div className="Person" >
//         <h1 onClick = {props.click}> I am {props.name} and i am { props.age } years old </h1>
//         <p> { props.children }</p>
//         <input type="text" onChange = {props.changed} value={props.name}/>
//         </div>
//     )
// }

// export default person;



import React , {Component}  from 'react';
import './Person.css';

class Person extends Component{

    
   
   render() {
    return (
        <div className="Person" >
        <h1 onClick = {this.props.click}> I am {this.props.name} and i am { this.props.age } years old </h1>
        <p> { this.props.children }</p>
        <input type="text" onChange = {this.props.changed} value={this.props.name}/>
        </div>
    )
   }
}

export default Person;

/*
 This is a functional Component also i guess names as Pure Component
 
 You cant use state here 
 You will just use props 
 For this We use React hooks


*/