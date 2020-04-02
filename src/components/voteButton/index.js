import React from "react";
class VoteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: {
        button1: 0,
        button2: 0
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
      counters: {
        button1: upVote(),
        button2: downVote()
      }
    });
  }

  render() {
    return (
      <div className="">
        <button onClick={this.upVote}>upvote:</button>
        <button onClick={this.downVote}>downvote:</button>
      </div>
    );
  }
}
export default VoteButton;
