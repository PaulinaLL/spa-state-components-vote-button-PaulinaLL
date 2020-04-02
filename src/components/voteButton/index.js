import React from "react";
class VoteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10
    };
    this.handleClick = this.handleClick.bind(this);
    // console.log(this.props.type);
  }

  handleClick() {
    this.setState((state, props) => {
      if (props.type === "down" && state.counter === 0) {
        return { counter: state.counter };
      } else if (props.type === "up") {
        return { counter: state.counter++ };
      } else {
        return { counter: state.counter-- };
      }
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {" "}
        {this.props.title} {this.state.counter}
      </button>
    );
  }
}
export default VoteButton;
