import './App.css';
import * as React from 'react';
import Row from './Row';
import RowAdd from './Row-add';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  deleteRow = id => {
    const filteredItems = this.state.items.filter(function (x) {
      return x.id !== id;
    });
    this.setState({
      items: filteredItems
    });
  }

  addRow = (name, username, email, website) => {
    this.setState({
      items: [...this.state.items, {'id': new Date().getTime(), 'name': name, 'username': username, 'email': email, 'website': website}]
    });    
  }

  submit = (id, name, username, email, website) => {
    let index = this.state.items.findIndex((x) => x.id===id);
    const newState = this.state.items;
    newState[index] = {'id': +id, 'name': name, 'username': username, 'email': email, 'website': website};
    this.setState({
      items: newState
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {

      return (
        <div className="app-wrapper">
          {items.map(x => <Row submit={this.submit} delete={this.deleteRow} key={x.id} item={x} />)}
          <RowAdd add={this.addRow}/>
        </div>
      )
    }
  }
}

export default App;