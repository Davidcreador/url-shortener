import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    input: '',
    smallUrl: null
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {input} = this.state;
    const data = {
      path: input,
      description: 'Search site'
    }

    if (data.path !== '') {
      axios.post("http://localhost:8080/url", data)
      // axios.post("https://url-shortener-server.herokuapp.com/url", data)
      .then(res => {
        console.log(res);
        this.setState({smallUrl: res.data});
      }).catch(err => console.error);
    }

  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }
  
  render() {
    return (
      <div className="App container">
        <h1 className="title">Url Shortener</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input onChange={this.handleChange} value={this.state.input} type="text" placeholder="Type or Paste your url" className="input" />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-link">Send</button>
          </div>
        </form>
        {this.state.smallUrl ?
          <div>
            <h2>Your link:</h2>
            <a href={this.state.smallUrl}>{this.state.smallUrl}</a>
          </div> : null}
        
      </div>
    );
  }
}

export default App;
