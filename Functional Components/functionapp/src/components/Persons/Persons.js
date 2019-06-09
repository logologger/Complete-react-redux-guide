// import React from 'react';

// import Person from './Person/Person';


// const persons  = (props) => props.persons.map( (person, index) => {
//         return  <Person 
//         click={props.clicked.bind(this, index)}
//         key = {index}  
//         changed = {(event) => { props.changed(event, index)}}
//         name = {person.name}
//         age = {person.age}/>
   
// })


// export default persons;

import React , {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {

        constructor(props) {
                super(props)
                this.state = {

                }
        }

        static getDerivedStateFromProps(props , state) {
                console.log("[Person] getDerivedStateFromProps")
                return state;
        }
        shouldComponentUpdate() {
                console.log("[Persons] shouldComponent update");
                return true;
        }

        getSnapshotBeforeUpdate() {
                console.log("[Persons] getSnapshortBeforeUpdate")
                return {"message" : "Coming from snapshprt bro !!"};
        }

        componentDidUpdate(props, state , snapshot) {
                console.log("[Persons] componentDidUpdate" + snapshot)
        }
        render() {
                return this.props.persons.map( (person, index) => {
                       return  <Person 
                        click={this.props.clicked.bind(this, index)}
                        key = {index}  
                        changed = {(event) => { this.props.changed(event, index)}}
                        name = {person.name}
                        age = {person.age}/>
                })
                }
}




export default Persons;