import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h4>Name: {props.name} </h4>
        <h4>Brand: {props.brand} </h4>
        <h4>Price: {props.price} </h4>
        <h4>ABV: {props.alcoholContent} </h4>
        <h4>Quantity: {props.quantity} </h4>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;
