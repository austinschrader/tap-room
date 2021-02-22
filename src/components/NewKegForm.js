import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input type='text' name='name' placeholder='Keg name' required />
        <input type='text' name='brand' placeholder='Brand' required />
        <input type='number' name='price' placeholder='Price' required />
        <input type='number' name='alcoholContent' placeholder='ABV' required />
        <input type='number' name='quantity' placeholder='Quantity' required />
        <button type='submit'>Add Keg</button>
      </form>
    </>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseInt(event.target.alcoholContent.value),
      quantity: parseInt(event.target.quantity.value),
      id: v4(),
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
