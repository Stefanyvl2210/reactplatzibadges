import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './css/BadgeNew.css';

class BadgeNew extends React.Component{

    state = { form: {
        firstName : '',
        lastName : '',
        email : '',
        jobTitle : '',
        twitter : ''
    } };

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form, //los 3 puntos me trae la informacion que ya tiene el form
                [e.target.name]: e.target.value,
            },
        });
    }

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
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BadgeNew;