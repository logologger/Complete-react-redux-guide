import React from 'react';

const Cockpit = (props) => {
    let classes = [];

    if(props.persons.length <=2) {
      classes.push('red');
    }
    else if (props.persons.length <=1) {
      classes.push('bold')
    }

    const buttonStyle = {
        backgroundColor : 'green',
        padding: '8px',
        marginTop: '12px'
      };
  

  
      if(props.showPersons) {
        buttonStyle.backgroundColor = 'red';
      }

        return <div >
            <h1 className = {classes.join(' ')} >Hello I am Maxmillar</h1>
            <button style = {buttonStyle} onClick = { props.clicked }>Switch Name </button> 
            
          </div>
 

}


export default Cockpit;