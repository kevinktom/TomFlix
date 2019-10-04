import React from 'react';
import { Link } from 'react-router-dom';
// import { Session } from 'inspector';
// import {handleDemo} from '../greeting/greeting_container'
// import {handleDemo} from '../splash/splash'
// import {sessionConnector} from './login_form_container';
// import {deleteErrors} from '../../actions/session_actions';

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
    this.props.demo(testUser);
  }

  handleSubmit(e){
    // debugger
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push({pathname: '/'}));
  }

  // renderErrors(){
  //   let errors = this.props.errors.map((error, i) => {
  //     return (
  //       <li key={i}
  //         error={error}>{error}
  //       </li>
  //     )
  //   })
  //   return errors;
  // }

  renderErrors(){
    // debugger
    if (this.props.errors.length > 0){
      return (<div className="errors">{this.props.errors[0]}</div>)
    }
  }

  renderIndividualErrors(error){
    if (this.props.errors.includes(error) !== nil){
      return error;
    }
  }
  
  componentWillUnmount(){
    this.props.clearErrors()
  }

  render(){
    const invalidPassword = "Your password must contain between 4 and 60 characters."
    return(
      <div className='containerSplash'>
        
        <img src={window.splash} className="background" />
        <Link to='/'><img src={window.logo} className="sessionlogo" /> </Link>
        <div className='signin'> <button onClick={this.handleDemo} >Demo</button> </div>

        <div className='sessionBox'>
          <div>
            <h1 className='head'>{this.props.formType}</h1>
            <form onSubmit={this.handleSubmit}>
              {/* <ul className="errors">
                {this.renderErrors()}
              </ul> */}
              {this.renderErrors()}
              {/* <div className="errors">{this.props.errors[0]}</div> */}
              <label htmlFor="email"></label>
              <input id="email" onChange={this.update('email')} type="email" placeholder="Email" className='textField'/>
              <br/>
              <label htmlFor="password"> </label>
              <input id="password" placeholder="Password" onChange={this.update('password')} type="password"  className='textField'/>
              {/* <p className='errors'>{this.renderIndividualErrors(invalidPassword)}</p> */}
              <br/>
              <input type="submit" value={this.props.formType} className='sessionSignin'/>
            </form>
          </div>
          <div>
            <a href="https://github.com/kevinktom" className="github"><img src={window.github} /> </a>
            <a href="https://www.linkedin.com/in/kevin-tom-b36951a9/" className="linkedin"><img src={window.linkedin} /> </a>
            <label className='textthreelabel'>New to Tomflix?&nbsp;
              <div className='textthreediv'> 
                {this.props.navLink}
              </div>
            </label>
          </div>
        </div> 

      </div>
      
    )
  }

}

export default SessionForm