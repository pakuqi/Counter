var React = require('react');

var Counter = React.createClass ({
  //Event Handler for Increment
  handleOnClickIncrease: function() {
    this.props.onIncrement();
  },
  //Event Handler for Decrement
  handlOnClickDecrement: function() {
    this.props.onDecrement();
  },

  render: function() {
    return(
      <div>
      <p>
          Clicked: <span id="value">{this.props.value}</span> times
          <button id="increment" onClick={this.handleOnClickIncrease}>+</button>
          <button id="decrement" onClick={this.handlOnClickDecrement}>-</button>
        </p>
      </div>
    );
  }
});

module.exports = Counter;
