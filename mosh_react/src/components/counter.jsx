import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //imageURL: 'https://picsum.photos/200'
  }; //any data this comp needs

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  // //not used
  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold",
  // };

  //bind this  the event object
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

    

  render() {
    console.log("props",this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={()=> this.handleIncrement()}
          className="btn btn-secondary btn-sm "
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
