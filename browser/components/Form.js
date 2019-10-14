import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit() {
    await this.props.addStudent(this.state)
  }

  render() {
    return (
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input 
          type="text" 
          name="firstName" 
          placeholder="Input First name..."
          onChange={this.handleChange}
          value={this.state.firstName} 
        />
        <label htmlFor="lastName">Last Name: </label>
        <input 
          type="text" 
          name="lastName" 
          placeholder="Input Last name..." 
          onChange={this.handleChange}
          value={this.state.lastName} 
        />
        <label htmlFor="email">Email: </label>
        <input 
          type="text" 
          name="email" 
          placeholder="Input email..." 
          onChange={this.handleChange}
          value={this.state.email} 
        />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
