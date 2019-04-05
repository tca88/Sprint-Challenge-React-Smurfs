import React, { Component } from "react";
import "./Components.css";
import PropTypes from "prop-types";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: 0,
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
        age: 0,
        height: ""
      }
    });
  };

  handleInputChange = e => {
    e.persist();
    console.log(this.state.smurf);
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]:
          e.target.name === "age"
            ? parseInt(e.target.value, 10)
            : e.target.value
      }
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h1>Add A New Smurf!</h1>
        <form className="form-container" onSubmit={this.addSmurf}>
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

SmurfForm.propTypes = {
  addSmurf: PropTypes.func
};

export default SmurfForm;
