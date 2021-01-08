import * as React from 'react';


class RowAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            id: '',
            name: '',
            username: '',
            email: '',
            website: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.setState({
            id: '',
            name: '',
            username: '',
            email: '',
            website: ''
        })
    }
    handleChange() {
        this.setState({id: new Date().getTime()});
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }    
    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }    
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }  
    handleChangeWebsite(event) {
        this.setState({website: event.target.value});
    }        
    handleSubmit(event) {
        this.props.add(this.state.name, this.state.username, this.state.email, this.state.website);
        this.setState({
            id: '',
            name: '',
            username: '',
            email: '',
            website: ''
        });
        event.preventDefault();
    }
    render() {
        return (  
            <div className = "row-wrapper">
                <div className="items">                    
                    <input className="item" placeholder="name" value={this.state.name} onChange={this.handleChangeName} />
                    <input className="item" placeholder="username" value={this.state.username} onChange={this.handleChangeUsername} />
                    <input className="item" placeholder="email" value={this.state.email} onChange={this.handleChangeEmail} />
                    <input className="item" placeholder="website" value={this.state.website} onChange={this.handleChangeWebsite} />
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
