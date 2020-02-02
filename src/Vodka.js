import React from "react";
// import { Link } from "react-router-dom";

class Vodka extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        vodkaData: [],
     }
     };
    
     async componentDidMount() {
      fetch('http://127.0.0.1:8000/drinks/5')
      .then(res => res.json())
      .then(res => {
        this.setState({vodkaData: res})
        console.log(this.state.vodkaData)
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
 export default Vodka;