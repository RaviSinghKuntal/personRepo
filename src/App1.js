import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import MyComponent from '../src/MyComponent';

const appp = () => {
  const [personState, setPersonState] = useState(
    [
      { name: 'Girish', age: 42 },
      { name: 'MAxx', age: 57 },
      { name: 'Ravi', age: 24 },
    ],
    // otherState: 'Other state',
  );

  console.log({ personState, setPersonState });

  const changeName = (newName) => {
    setPersonState( 
      [
        { name: 'MAxx Malian', age: 95 },
        { name: newName, age: 14 },
        { name: 'Ravi Kuntal', age: 58 },
      ]
      // otherState: personState.otherState,
     );
  }

  const updateNameUsingInputField = (event) => {
    setPersonState(
      [
        { name: event.target.value, age: 95 },
        { name: 'MAxx Malian', age: 14 },
        { name: 'Ravi Kuntal', age: 58 },
      ],
      // otherState: personState.otherState,
    )
  }

    return (
      <div className="App">
       {/* <h1>Welcome to react App</h1>
       <Person 
       name= {personState[0].name} 
       age= {personState[0].age} 
       change={updateNameUsingInputField} />
       <Person 
       name= {personState[1].name} 
       age= {personState[1].age} 
       onClick= {changeName} />
       <Person 
       name= {personState[2].name} 
       age= {personState[2].age} />

       <button onClick={() => changeName('GIRISH CAPITAL')}>Switch Name</button> */}
       <MyComponent />
      </div>
    );
  }


export default appp;
