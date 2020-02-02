import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from "./Home"
import Nav from "./Nav"
import Rum from "./Rum"
import Gin from "./Gin"

class App extends Component {
  constructor (props){
    super (props)
  this.state = {
    drinksData: [],
 }
 };

 async componentDidMount() {
  fetch('http://127.0.0.1:8000/drinks/')
  .then(res => res.json())
  .then(res => {
    this.setState({drinksData: res})
    console.log(this.state.drinksData)
  })
  }
render () {
  

 
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path="/Rum" exact component={Rum}/>
        <Route path="/Gin" exact component={Gin}/>
      </Switch>
    </div> 
  </Router>
  );
}
}

export default App;
