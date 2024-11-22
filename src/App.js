import React, { Component} from 'react';
import Githubcard from './Githubcard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username : '',
    };

  }

  // to update the username
  handleInputchange = (event) =>{
    this.setState({ username: event.target.value});

  };

  handleFormSubmit = (event) =>{
    event.preventDefault();
  }



  render(){

    return (
      <div className="App">
        <h1>Github Profile</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type='text'
          placeholder='Enter username'
          value={this.state.usernam}
          onChange={this.handleInputchange}
          />
          <button type='submit'>Search</button>
        </form>

        {
          this.state.username && (
            <Githubcard username={this.state.username}/>
          )
        }
         
       
      </div>
    );
  }
}

export default App;
