import React, { Component } from "react";

class sem1 extends Component {
  constructor() {
    super();
    this.state = {
      newUser: '',
      sem1: {},
      value: {
        mail: '',
        förnamn: '',
        efternamn: '',
        seminarId: 1
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

componentDidMount() {
    // Simple GET request using fetch
    fetch('https://localhost:5001/api/seminars/1')
        .then(response => response.json())
        .then(data => this.setState({ sem1: data}));
}

handleChange(obj) {
   this.state.newUser = {...this.state.value,...obj}
  this.setState({value: this.state.newUser});
}

handleSubmit(event) {
    fetch("https://localhost:5001/api/visitors", {
      method: "POST",
      body: JSON.stringify(this.state.newUser),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

  alert('Tack ' + this.state.value.förnamn + ' för att du har valt oss');
  event.preventDefault();
}




  render() {
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
              onChange={e => this.handleChange({ mail: e.target.value })}
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
                onChange={e => this.handleChange({ efternamn: e.target.value })}
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
