import React from "react";
// import { Link } from "react-router-dom";

class Brady extends React.Component {
    constructor (props){
        super (props)
      this.state = {
        brandyData: [],
     }
     };
    
     async componentDidMount() {
      fetch('http://127.0.0.1:8000/drinks/3')
      .then(res => res.json())
      .then(res => {
        this.setState({brandyData: res})
        console.log(this.state.brandyData)
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
 export default Brandy;