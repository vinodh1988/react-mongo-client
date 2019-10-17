import React from 'react';
import './index.css';
export class Winner extends React.Component{
    render(){
        return(
        <div className="winner">
            <h3>{this.props.winner.firstname}</h3>
            <p>
                <i>{this.props.winner.bornCountry}</i><br/>
                <b>{this.props.winner.born}</b>
            </p>
        </div>
        )
    }
}