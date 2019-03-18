import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import Title from "./Title";

@inject("store")
@observer
class App extends Component {
  handleChange(event) {
    const { updateCheck } = this.props.store;
    updateCheck();
  }

  render() {
    const { isDisplay } = this.props.store;
    return (
      <div>
        <input
          type="checkbox"
          checked={isDisplay}
          onChange={this.handleChange.bind(this)}
        />
        <Title />
      </div>
    );
  }
}
export default App;
