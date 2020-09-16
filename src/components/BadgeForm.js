import React from 'react';

class BadgeForm extends React.Component{

    handleClick = e => {
        console.log('Button was clicked');
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.formValues);
    }

    render(){
        return (
            <div className="class">
                <h1>New Attendant</h1>
                
                <form onSubmit={this.handleSubmit} action="">
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="firstName" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="lastName" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} type="email" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="jobTitle" />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="twitter" />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }

}

export default BadgeForm;