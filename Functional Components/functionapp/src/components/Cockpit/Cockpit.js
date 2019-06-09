import React , {useEffect} from 'react';

const Cockpit = (props) => {
    let classes = [];

    useEffect(() => {
      setTimeout(() => {
        alert("yo Yo After 1000 ms")
      }, 1000)
      console.log('[Cockpit JS] useEffect- For every render i am called again')
    } , /*[props.person]* tell react to execute useEffect onlywhen props person is changed
    */ [])

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