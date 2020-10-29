import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../components/seminarsItem/style.css";

class Seminars extends Component {
  constructor() {
    super();
    this.state = {
      seminars: []
    };
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch("https://localhost:5001/api/seminars")
      .then((response) => response.json())
      .then((data) => this.setState({ seminars: data }));
  }

  render() {
    return (
    <div>
        
        <h1>Seminars List</h1>
        <ul>
          {this.state.seminars.map(item => {
            return (
            <div>
                <li key={`seminars-${item.id}`}>{item.namn}</li>
            <p>{item.beskrivning}</p>
            </div> 
            )
          })}
        </ul>

        
    </div>
    )
  }
}

export default Seminars;
