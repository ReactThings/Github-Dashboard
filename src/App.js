import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  state = {
    user_data: null,
    repo_data: [],
    events_data: [],
    followers_data: [],
    following_data: [],
  }

  fetchData(username){
    axios.get(`https://api.github.com/users/${username}`)
      .then((user_resp)=>{
        this.setState({
          user_data: {
            name: user_resp.data.name,
            bio: user_resp.data.bio,
            avatar_url: user_resp.data.avatar_url,
            followers: user_resp.data.followers,
            following: user_resp.data.following,
          }
        })
      })
      .catch((error)=>{
        console.log(error);
      });

    axios.get(`https://api.github.com/users/${username}/repos`)
      .then((repo_resp)=>{
        this.setState({
          repo_data: repo_resp.data.map(repo => ({
            id: repo.id,
            name: repo.name,
            owner: repo.owner,
            description: repo.description,
            html_url: repo.html_url,
          }))
        })
      })
      .catch((error)=>{
        console.log(error);
      });

    axios.get(`https://api.github.com/users/${username}/events`)
      .then((event_resp)=>{
        this.setState({
          events_data: event_resp.data.map(event => ({
            type: event.type,
            repo: event.repo,
          }))
        })
      })
      .catch((error)=>{
        console.log(error);
      });

    axios.get(`https://api.github.com/users/${username}/followers`)
      .then((followers_resp)=>{
        this.setState({
          followers_data: followers_resp.data.map(follower => ({
            login: follower.login,
            html_url: follower.html_url,
            avatar_url: follower.avatar_url,
          }))
        })
      })
      .catch((error)=>{
        console.log(error);
      });

    axios.get(`https://api.github.com/users/${username}/following`)
      .then((following_resp)=>{
        this.setState({
          following_data: following_resp.data.map(following => ({
            login: following.login,
            html_url: following.html_url,
            avatar_url: following.avatar_url,
          }))
        })
      })
      .catch((error)=>{
        console.log(error);
      });
  }

  componentDidMount(){
      this.fetchData('donfour');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
