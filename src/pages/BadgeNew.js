import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './css/pages.css';

class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Stefany" lastName="Vega" description="description" />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                            <div className="div"></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BadgeNew;