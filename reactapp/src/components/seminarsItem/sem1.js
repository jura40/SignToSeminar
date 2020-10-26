import React, { Component } from "react";

class sem1 extends Component {
  constructor() {
    super();
    this.state = {
      sem1: {},
      value: {
        mail: '',
        förnamn: '',
        efternamn: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('https://localhost:5001/api/seminars/2')
        .then(response => response.json())
        .then(data => this.setState({ sem1: data}));

}

handleChange(obj) {
  let newUser = {...this.state.value,...obj}
  this.setState({value: newUser});
}

handleSubmit(event) {
  alert('Tack ' + this.state.value.förnamn + ' för att du har valt oss');
  event.preventDefault();
}

  render() {
    console.log(this.state.value)

    return (
      <div>
        <a href="index.html" style={{ color: "black", margin: "50px" }}>
          HOME
        </a>
  
        <article style={{ margin: "50px 0px 0px 90px", fontSize: "20px" }}>
          Kursbeskrivning
          <p>{this.state.sem1.namn}kurs i presentationsteknik.</p>
          <p>
            {this.state.sem1.beskrivning}
          </p>
        </article>
        <div>
          {" "}
          <a
            href="seminarium.html"
            style={{ margin: "50px 0px 0px 90px", fontSize: "25px" }}
          >
            back
          </a>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="email"
              name= "mail"
              value={this.state.value.mail} 
              onChange={this.handleChange}
              style={{ margin: "10px 0px 0px 90px" }}
            ></input>
            <div>
              <input
                type="förnamn"
                placeholder="förnamn"
                name= "förnamn"
                value={this.state.value.förnamn} 
                onChange={e => this.handleChange({ förnamn: e.target.value})}
                style={{ margin: "10px 0px 0px 90px" }}
              ></input>
            </div>
            <div>
              <input
                type="efternamn"
                placeholder="efternamn"
                name= "efternamn"
                value={this.state.value.efternamn} 
                onChange={this.handleChange}
                style={{ margin: "10px 0px 0px 90px" }}
              ></input>
            </div>
            <input type="submit" style={{ margin: "10px 0px 0px 90px" }}></input>
          </form>
        </div>
      </div>
    );
  }
  
};

export default sem1;
