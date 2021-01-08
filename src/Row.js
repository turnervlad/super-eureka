import * as React from 'react';

class Row extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            username: '',
            email: '',
            website: '',
            disabled: true
        };
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
        this.edit = this.edit.bind(this);
    }
    handleChangeId(event) {
        this.setState({id: event.target.value});
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
    edit(event) {
        this.setState({
            disabled: false,
            id: this.props.item.id,
            name: this.props.item.name,
            username: this.props.item.username,
            email: this.props.item.email,
            website: this.props.item.website
        });
        event.preventDefault();
    }
    submitInput = () => {
        this.props.submit(this.state.id, this.state.name, this.state.username, this.state.email, this.state.website);
        this.setState({
            disabled: true
        })
    }

    render() {
        return (
            <div className="row-wrapper">
                <div className="items">                    
                    <input className="item" placeholder={this.props.item.name} value={this.state.name} onChange={this.handleChangeName} disabled={this.state.disabled} />
                    <input className="item" placeholder={this.props.item.username} value={this.state.username} onChange={this.handleChangeUsername} disabled={this.state.disabled}/>
                    <input className="item" placeholder={this.props.item.email} value={this.state.email} onChange={this.handleChangeEmail} disabled={this.state.disabled}/>
                    <input className="item" placeholder={this.props.item.website} value={this.state.website} onChange={this.handleChangeWebsite} disabled={this.state.disabled} />
                </div>
                <div className="buttons">
                    <div className="button">
                        <button onClick={!this.state.disabled ? this.submitInput  : this.edit}>{this.state.disabled ? 'Edit row' : 'Submit'}</button>
                    </div>
                    <div className="button">
                        <button onClick={() => this.props.delete(this.props.item.id)}>Delete row</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Row;
