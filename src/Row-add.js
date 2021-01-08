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
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
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
    handleChange(event) {
        this.setState({id: new Date().getTime()});
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
    handleChangeWebsite(event) {
        this.setState({website: event.target.value});
    }        
    handleSubmit(event) {
        // console.log(this.state.id, this.state.name, this.state.username, this.state.email);
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
                    <input className="item" placeholder="name" value={this.state.name} onChange={this.handleChange2} />
                    <input className="item" placeholder="username" value={this.state.username} onChange={this.handleChange3} />
                    <input className="item" placeholder="email" value={this.state.email} onChange={this.handleChange4} />
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
