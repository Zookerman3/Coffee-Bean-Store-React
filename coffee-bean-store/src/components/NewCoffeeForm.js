import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props) {

    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            price: parseInt(event.target.price.value),
            amount: 130,
            id: v4()
        })
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewCoffeeFormSubmission}
                buttonText="Add New Coffee" />
        </React.Fragment>
    );
}

NewCoffeeForm.propTypes = {
    onNewCoffeCreation: PropTypes.func
};

export default NewCoffeeForm;