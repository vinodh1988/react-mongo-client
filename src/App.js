import React from 'react';
import ReactDOM  from 'react-dom';
import Request from 'superagent';
import {Winner} from './Winner';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.getWinners=this.getWinners.bind(this);
    this.state={winners:[]}
  }

  getWinners(){
    let pattern=ReactDOM.findDOMNode(this.refs.pattern).value;
     Request.get("http://localhost:9999/winners/all/"+pattern).then
     (
       (response)=>{
           this.state.winners=response.body;
           this.setState(this.state);

       }
     ).catch(
       ()=>{console.log("error")}
     );
  }

  render(){
     let code=this.state.winners.map((x)=>
     <Winner key={x.id} winner={x}></Winner>);
      return(
        <div className="home">
            Search winner  <input type="text" ref="pattern" onKeyUp={this.getWinners}/>
            {code}
        </div>
      );
  }
}


export default App;
