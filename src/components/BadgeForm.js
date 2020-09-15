import React from 'react';

class BadgeForm extends React.Component{

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleClick = e => {
        console.log('Button was clicked');
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <div className="class">
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit} action="">
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="lastName" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} type="email" className="form-control" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="jobTitle" placeholder="Job Title"/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} type="text" className="form-control" name="twitter" placeholder="Twitter"/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

}

export default BadgeForm;