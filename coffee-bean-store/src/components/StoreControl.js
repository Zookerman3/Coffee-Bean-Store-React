import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';

class StoreControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
    }
  
    render(){
        let currentlyVisibleState = null;
        let addCoffeeButton = null;
        if (this.state.formVisibleOnPage) {
          currentlyVisibleState = <NewTicketForm />
        } else {
          currentlyVisibleState = <CoffeeList />
        }
      return (
        <React.Fragment>
             {currentlyVisibleState}
        </React.Fragment>
      );
    }
  
  }
  
  export default StoreControl;