import React from 'react';
import { Link } from 'react-router-dom';
// import { Session } from 'inspector';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]:e.target.value});
    }
  }

  handleSubmit(e){
    // debugger
    e.preventDefault;
    this.props.action(this.state);
  }

  renderErrors(){
    let errors = Object.values(this.props.errors).map((error, i) => {
      return (
        <li key={i}
          error={error}>{error}</li>
      )
    })
    return errors;
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.update('email')} type="text" value={this.state.email}/>
        <input onChange={this.update('password')} type="password" value={this.state.password}/>
        <input type="submit" value={this.props.formType}/>
        <ul>{this.renderErrors()}</ul>

        {this.props.navLink}
      </form>
      
    )
  }




}

export default SessionForm