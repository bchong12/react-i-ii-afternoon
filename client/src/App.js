import React from "react";
import data from "./data";
import Header from "./components/Header/Header.component";
import Card from "./components/Card/Card.component";
import Button from "./components/Buttons/Button.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: data,
      index: 0,
    };
  }

  render() {
    const text1 = "<";
    const text2 = ">";
    return (
      <div>
        <Header />
        <div className="bottom">
          <Card
            index={this.state.data[this.state.index].id}
            title={`${this.state.data[this.state.index].name.first} ${
              this.state.data[this.state.index].name.last
            }`}
            from={this.state.data[this.state.index].country}
            job={this.state.data[this.state.index].title}
            employer={this.state.data[this.state.index].employer}
            movie1={this.state.data[this.state.index].favoriteMovies[0]}
            movie2={this.state.data[this.state.index].favoriteMovies[1]}
            movie3={this.state.data[this.state.index].favoriteMovies[2]}
          />
          <div className="bottom-rack">
            <button
              className="move-button"
              onClick={() => {
                if (this.state.index === 0) {
                  return this.setState({
                    index: 24,
                  });
                }
                this.setState({
                  index: this.state.index - 1,
                });
              }}
            >
              {text1} Previous
            </button>
            <div className="buttons">
              <Button title="Edit" />
              <Button title="Delete" />
              <Button title="New" />
            </div>
            <button
              onClick={() => {
                if (this.state.index === 24) {
                  return this.setState({
                    index: 0,
                  });
                }
                this.setState({
                  index: this.state.index + 1,
                });
              }}
              className="move-button"
            >
              Next {text2}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
