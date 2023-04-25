import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
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

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;