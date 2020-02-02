import React from "react";
// import { Link } from "react-router-dom";

class Tequila extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        tequilaData: [],
     }
     };
    
     async componentDidMount() {
      fetch('http://127.0.0.1:8000/drinks/4')
      .then(res => res.json())
      .then(res => {
        this.setState({tequilaData: res})
        console.log(this.state.tequilaData)
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
 export default Tequila;