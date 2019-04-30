import React from "react";
import PropTypes from "prop-types";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: 0
};

Smurf.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    age: PropTypes.number,
    height: PropTypes.string
  })
};
export default Smurf;
