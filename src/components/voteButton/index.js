import React from "react";
class VoteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button: {
        up: 0,
        down: 0
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote(num) {
    return num++;
  }

  downVote(num) {
    return num--;
  }
  handleClick() {
    console.log("hshs");
    this.setState({
      button: {
        up: this.upVote(),
        down: this.downVote()
      }
    });
  }

  render() {
    return (
      <div className="">
        <button onClick={this.handleClick}>
          upvote: {this.state.button.up}
        </button>
      </div>
    );
  }
}
export default VoteButton;
