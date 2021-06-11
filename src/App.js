import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`http://18.224.200.47/products/list`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map((dataItem, index) => (
          <div key={index + dataItem.name} className="item">
            {dataItem.name}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
