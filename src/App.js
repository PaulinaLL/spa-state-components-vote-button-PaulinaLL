import React from "react";
import "./App.css";
import VoteButton from "./components/voteButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vote Buttons</h1>
        <div className="buttons">
          <VoteButton type="up" title="Upvote:" />
          <VoteButton type="down" title="Downvote:" />
        </div>
      </header>
    </div>
  );
}

export default App;
