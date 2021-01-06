import React from 'react';
import Person from '../src/Person/Person';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log({referencessssssssssssssssss: this.myRef});
  }
  render() {
    console.log({reference: this.myRef});
    return (
      <div>
      {/* <input ref={this.myRef} />; */}
      <Person ref={this.myRef} />
      </div>
    )
  }
}

export default MyComponent;