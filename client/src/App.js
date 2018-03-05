import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    input: '',
    smallUrl: null,
    board: []
  }

  componentDidMount() {
    axios.get("https://tinyr-s.herokuapp.com/board")
      .then(res => {
        this.setState({board: res.data});
      }).catch(err => console.error);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {input} = this.state;
    const data = {
      path: input,
      description: 'Search site'
    }

    if (data.path !== '') {
      axios.post("https://tinyr-s.herokuapp.com/url", data)
      .then(res => {
        this.setState({smallUrl: res.data});
      }).catch(err => console.error);
    }

  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }

  renderSites = () => {
    if (!this.state.board.length) return null;
    return this.state.board
      // .sort((a, b) => a.rank - b.rank)
      .map(b => <a target="_blank" key={b.id} className="button" href={b.path}>{b.path}</a>);
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Url Tinyr</h1>
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
          <div>
            {this.state.smallUrl ?
              <div className="tinyr-link">
                <h2 className="subtitle">Your link:</h2>
                <a href={this.state.smallUrl}>{this.state.smallUrl}</a>
              </div> : null}
          </div>
          <div className="board">
            <h2 className="title">100 Top Sites</h2>
            {this.renderSites()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
