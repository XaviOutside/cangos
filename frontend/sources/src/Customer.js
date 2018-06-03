import React, { Component } from 'react';
import './Customer.css';

const API = 'http://localhost:8081';

class Customer extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      birthdate: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  
    fetch(API + '/api/values/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((res) => res.json())
    .then((data) =>  console.log(this.state))
    .catch((err)=>console.log(err));
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />

        <label htmlFor="birthdate">Enter your birth date</label>
        <input id="birthdate" name="birthdate" type="text" value={this.state.birthdate} onChange={this.handleChange} />

        <button>Send data!</button>
      </form>
    );
  }
}

export default Customer;

