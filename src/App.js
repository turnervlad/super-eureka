import './App.css';
import * as React from 'react'
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
    })
  }

  addRow = () => {
    console.log('dd');
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
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
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
          {items.map(x => <Row delete={this.deleteRow} item={x} />)}
          <RowAdd add={this.addRow}/>
        </div>
      )
    }
  }
}

export default App;