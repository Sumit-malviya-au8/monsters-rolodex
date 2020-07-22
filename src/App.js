import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  //Executing part of code after mounting of the render method
  //ComponentDidMount is method accessible bcoz of class.

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      //  .then(user => console.log(user))
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({searchField:e.target.value})
  }


  //Render method comes with the Component menthod which is the part of React Lib.
  //setState with one argument in async while setstate whnever take call back function it become syschronus
  // () => console.log(this.state) second arg of setState
  render() {
    const { monsters, searchField } = this.state;
    
    //Dynamic Search:- Rerendring bcoz of setState
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox 
        placeholder="Search Monsters"
        handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}

export default App


