import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import Title from "./Title";
import DevTools from "mobx-react-devtools";

@inject("store")
@observer
class App extends Component {
  handleChange(event) {
    const { setIsDisplay } = this.props.store;
    setIsDisplay();
  }

  handleInput(event) {
    const { setTitle } = this.props.store;
    setTitle(event.target.value);
  }

  render() {
    const { isDisplay, title } = this.props.store;
    return (
      <div>
        <DevTools />
        <span>Is Display?</span>
        <input
          type="checkbox"
          checked={isDisplay}
          onChange={this.handleChange.bind(this)}
        />
        <hr />
        <span>Text?</span>
        <input
          type="text"
          value={title}
          onChange={this.handleInput.bind(this)}
        />
        <hr />
        <Title />
      </div>
    );
  }
}
export default App;
