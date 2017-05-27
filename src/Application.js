var React = require('react');
var Counter = require('./Counter');
var Redux = require('redux');

//Reducer
function reducer(state, action) {
     if (typeof state === 'undefined') {
       return 0
     }
     switch (action.type) {
       case 'INCREMENT':
         return state + 1
       case 'DECREMENT':
         return state - 1
       default:
         return state
     }
}

//Create Store
const store = Redux.createStore(reducer, 0);

var Application = React.createClass ({

  getInitialState: function() {
    return {
      value: 0,
    };
  },

  //Event Handler for Increment
  handleIncrement: function() {
    //Send INCREMENT Action to Store
    store.dispatch({ type: 'INCREMENT' })
  },

  //Event Handler for Decrement
  handleDecrement: function() {
    //Send DECREMENT Action to Store
    store.dispatch({ type: 'DECREMENT' })
  },

  //Update this.state.value
  update: function () {
    this.setState({
      value: store.getState()
    })
  },

  render: function() {
    //Subscribe: If change value call render
    store.subscribe(this.update);
    return (
      <div className="counter">
        <Counter value={this.state.value} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
      </div>
    );
  }
});

module.exports = Application;
