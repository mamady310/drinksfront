import React from "react";
// import { Link } from "react-router-dom";

class Gin extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        ginData: [],
     }
     };
    
     async componentDidMount() {
      fetch('http://127.0.0.1:8000/drinks/2')
      .then(res => res.json())
      .then(res => {
        this.setState({ginData: res})
        console.log(this.state.ginData)
      })
      }
    render() {
       
      
       return (
          <div >
            
            <ul></ul>
            
          </div>
       )
    }
 }
 export default Gin;