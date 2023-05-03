import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.coffeeList.map((coffeeSack) =>
                <Coffee
                whenCoffeeClicked={props.onCoffeeSelection}
                name={coffeeSack.name}
                origin={coffeeSack.origin}
                price={coffeeSack.price}
                roast={coffeeSack.roast}
                amount={coffeeSack.amount}
                id={coffeeSack.id}
                whenCoffeeSold={props.onCoffeeSale}
                />
            )}
        </React.Fragment>
    );
}


CoffeeList.propTypes = {
    coffeeList: PropTypes.array,
    onCoffeeSelection: PropTypes.func
};

export default CoffeeList;