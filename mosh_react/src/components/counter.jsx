import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    //imageURL: 'https://picsum.photos/200'
  }; //any data this comp needs

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleMinus = this.handleMinus.bind(this);
  // }
  // // //not used
  // // styles = {
  // //   fontSize: 50,
  // //   fontWeight: "bold",
  // // };

  //bind this  the event object
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  handleMinus = (product) => {
    console.log(product);
    this.setState({ value: this.state.value - 1 });
  };


  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        {/* what is this props */}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm "
        >
          Increment
        </button>
        <button
          onClick={() => this.handleMinus()}
          className="btn btn-secondary btn-sm "
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id) }
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
