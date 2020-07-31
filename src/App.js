import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component.jsx';

import {SearchBox} from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monster: [],
      searchField:''
  };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users=> this.setState({monster:users}));
}


  render() {
    const {monster,searchField}=this.state;
    const filter=monster.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
  )

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
      placeholder="Search Monsters"
      handleChange={e=>this.setState({searchField:e.target.value})}
      />


      <CardList monster={filter}/>
      </div>
    );
  }
}

export default App;
