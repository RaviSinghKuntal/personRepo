import React, { useState } from 'react';
import '../App.css';

const person = (props) => {
  const [personState, setPersonState] = useState(
    [
      { name: 'Girish', age: 42 },
      { name: 'MAxx', age: 57 },
      { name: 'Ravi', age: 24 },
    ],
    // otherState: 'Other state',
  );

  console.log({ props, personState, setPersonState });
  return (
    <div className= 'person'>
      <h1> I'm {props.name} and {props.age} old</h1>
      <h3>{props.children}</h3>
      {props.click ? <button onClick={props.click}>PropsButtonClick</button> : ''}
      <input onChange={props.change}></input>
    </div>
  )
};

export default person;