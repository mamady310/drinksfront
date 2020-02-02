import React from "react";
// import { Link } from "react-router-dom";

class Rum extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        rumData: [],
     }
     };
    
     async componentDidMount() {
      fetch('http://127.0.0.1:8000/drinks/1')
      .then(res => res.json())
      .then(res => {
        this.setState({rumData: res})
        console.log(this.state.rumData)
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
 export default Rum;