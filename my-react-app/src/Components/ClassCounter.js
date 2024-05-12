import React from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    //Dont update statte directly

    // this.state.count = this.state.count + 1;
    // console.log(this.state.count)

    // this.setState({
    //     count: this.state.count + 1
    // },
    // () => {
    //     console.log('Calback value', this.state.count)
    // }
    
    // )

    this.setState(prevState => ({
        count: prevState.count + 1
    }))

    // console.log(this.state.count)

 }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment Count</button>
      </>
    );
  }
}

export default ClassCounter;
