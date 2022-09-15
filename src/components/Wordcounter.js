import React from "react";

class App extends React.Component {
  state = { value: '', length: 0 }

  render() {
    console.log(this.state.length)

    return (
      <div>
        <h1>Hello</h1>
        <textarea value={this.state.value} onChange={(e) => {
          this.setState({ value: e.target.value })
          this.setState({ length: e.target.value.split(' ').length })
        }}></textarea>
      </div>
    )
  }
}

export default App