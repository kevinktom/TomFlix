import React from 'react';
import { Link } from 'react-router-dom';
// import { Session } from 'inspector';
// import {handleDemo} from '../greeting/greeting_container'
// import {handleDemo} from '../splash/splash'
// import {sessionConnector} from './login_form_container';

// sessionConnector();

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]:e.target.value});
    }
  }

  handleDemo(e){
    const testUser = { email: "hire@me.please", password: "password" }
    e.preventDefault();
    this.props.action(testUser);
  }

  handleSubmit(e){
    // debugger
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push({pathname: '/'}));
  }

  renderErrors(){
    let errors = this.props.errors.map((error, i) => {
      return (
        <li key={i}
          error={error}>{error}
        </li>
      )
    })
    return errors;
  }

  render(){
    return(
      <div className='containerSplash'>
        
        <img src={window.splash} className="background" />
        <Link to='/'><img src={window.logo} className="logo" /> </Link>
        <button onClick={this.handleDemo}>Demo Login</button> 
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input id="email" onChange={this.update('email')} type="text" value={this.state.email}/>
          <label htmlFor="password">Password: </label>
          <input id="password" onChange={this.update('password')} type="password" value={this.state.password}/>
          <input type="submit" value={this.props.formType}/>
          <ul>
            {this.renderErrors()}
          </ul>
          {this.props.navLink}
        </form>
      </div>
      
    )
  }




}

export default SessionForm