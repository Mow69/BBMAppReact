import React, { Component } from 'react';
// import './css/App.css';
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/Footer";
import MainContainer from "./components/layouts/MainContainer";
import Body from "./components/layouts/body/Body";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {

  componentDidMount() {
    //this.props.getXAuthToken('mouaz1@mouaz.com','mouaz');
  }

  render() {
    //this.props.isConnected
    return (
        <Router>
          <Header isConnected={this.props.isConnected} onLogout={this.props.logout} />
          <Body isConnected={this.props.isConnected} />
        </Router>
    );
  }
}

export default App;
