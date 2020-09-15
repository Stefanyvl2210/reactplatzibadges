import React from 'react';
import confLogo from '../images/badge-header.svg';
import userLogo from '../images/person.svg';

import './css/Badge.css';

class Badge extends React.Component{
    render(){
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt=""/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={userLogo} alt=""/>
                <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.description}</h3>
                <div>@Twitter</div>
            </div>
            <div className="Badge__footer">
                #PlatziConf
            </div>
        </div>
    }
}

export default Badge;