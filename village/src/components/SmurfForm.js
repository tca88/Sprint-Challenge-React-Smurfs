import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf);

    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  handleInputChange = e => {
    e.persist();
    console.log(this.state.smurf);
    if (e.target.name === "age") {
      e.target.value = parseInt(e.target.value, 10);
    }
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
