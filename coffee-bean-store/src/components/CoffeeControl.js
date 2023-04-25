import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';

class CoffeeControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCoffeeList: [],
            selectedCoffee: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedCoffee != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedCoffee: null,
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    };


    handleAddingNewCoffeeToList = (newCoffee) => {
        const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
        this.setState({
            mainCoffeeList: newMainCoffeeList,
            formVisibleOnPage: false
        });
    };

    handleChangingSelectedCoffee = (id) => {
        const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
        this.setState({ selectedCoffee: selectedCoffee });
    };

    handleEditClick = () => {
        console.log("handleEditClick reached!");
        this.setState({ editing: true });
    }

    render() {
        let currentlyVisibleState = null;
        let addCoffeeButton = null;
        let buttonText = null;
        if (this.state.selectedCoffee != null) {
            currentlyVisibleState = <CoffeeDetail
                coffee={this.state.selectedCoffee}
                onClickingEdit={this.handleEditClick} />
            buttonText = "Return to Coffee List";
        }
        else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCoffeeForm
                onNewCoffeeCreation={this.handleAddingNewCoffeeToList}
            />
            buttonText = "Return to Coffee List";
        } else {
            currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />
            buttonText = "Add Coffee";
            addCoffeeButton = <button onClick={this.handleClick}>{buttonText}</button>
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }

}

export default CoffeeControl;