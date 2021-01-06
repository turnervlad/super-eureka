// import { React } from "react";
import * as React from 'react';


class RowAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            id: '',
            name: '',
            username: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({id: event.target.value});
    }
    handleChange2(event) {
        this.setState({name: event.target.value});
    }    
    handleChange3(event) {
        this.setState({username: event.target.value});
    }    
    handleChange4(event) {
        this.setState({email: event.target.value});
    }        
    handleSubmit(event) {
        console.log(this.state.id, this.state.name, this.state.username, this.state.email);
        event.preventDefault();
    }
    render() {
        return (  
            <div className = "row-wrapper add-row" >
                <div className="items">
                    <input className="item" placeholder="id" value={this.state.id} onChange={this.handleChange} />
                    <input className="item" placeholder="name" value={this.state.name} onChange={this.handleChange2} />
                    <input className="item" placeholder="username" value={this.state.username} onChange={this.handleChange3} />
                    <input className="item" placeholder="email" value={this.state.email} onChange={this.handleChange4} />
                </div>
                <div className="buttons">
                    <div className="button">
                        <button onClick={this.handleSubmit}>Add row</button>
                    </div>
                </div>
            </div>
    )}
};


export default RowAdd;
