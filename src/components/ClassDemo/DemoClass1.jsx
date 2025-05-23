import React, { Component } from 'react';

export default class DemoClass1 extends Component {
    constructor(){
        super()
        this.state={
            name:"cristiano ronaldo",
            count:0
        }
    }
    counter(){
        this.setState({count:this.state.count+1});

    }
  render() {
    return (
      <div>
        bernabeau campnou!!
        <p> hello iam cr7 {this.state.name}</p>
        <p> total goal is {this.state.count}</p>
        <button onClick={()=>this.counter()}>count no.of goals</button>
      </div>
    );
  }
}
