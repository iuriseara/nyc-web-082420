import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from './Components/NotesContainer'

class App extends Component {
  render() {
    return (
      <>
        <Header header="drake" />
        <NotesContainer />
      </>
    )
  }
}

export default App;
