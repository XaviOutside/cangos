import React, { Component } from 'react';
import './Customer.css';

const API = 'http://localhost:8081';

class Customer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    //fetch(API + '/api/values', {
      //method: 'POST',
      //body: data,
      //body: JSON.stringify(data),
      //headers: { 'Content-Type': 'application/json' }
    //});

fetch('http://localhost:8081/api/values/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'yourValue',
    email: 'yourOtherValue',
  }),
});

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="birthdate">Enter your birth date</label>
        <input id="birthdate" name="birthdate" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default Customer;

