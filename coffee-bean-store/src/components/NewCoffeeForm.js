import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCoffeeForm(props) {

    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            price: parseInt(event.target.price.value),
            id: v4()
        })
    }

    return (
        <React.Fragment>
        <form onSubmit={handleNewCoffeeFormSubmission}>
          <input
            type='text'
            name='name'
            placeholder='Name Of Coffee' />
          <input
            type='text'
            name='origin'
            placeholder='Place Of Origin' />
          <input
            name='roast'
            placeholder='Type of Roast' />
            <input
            type='text'
            name='price'
            placeholder='Price in Dollars' />
          <button type='submit'>Add New Coffee</button>
        </form>
      </React.Fragment>
    );
}

NewCoffeeForm.propTypes = {
    onNewCoffeCreation: PropTypes.func
};

export default NewCoffeeForm;