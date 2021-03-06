import React from 'react';
import { Link } from 'react-router-dom';
import Type from 'typed.js'


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
    e.preventDefault();
    const testUser = { strings: ["hire@me.please"], typeSpeed: 50 }
    const testPassword = { strings: ["password"], typeSpeed: 50 }
    new Type(".demoemail", testUser);
    setTimeout(() => {
      new Type(".demopassword", testPassword);
    }, 1400)

    setTimeout(() => {
      this.props.demo({ email: "hire@me.please", password: "password"});
    }, 2100)
    
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push({pathname: '/'}));
  }

  

  renderErrors(){
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

              {this.renderErrors()}

              <label htmlFor="email"></label>
              <input id="email" onChange={this.update('email')} type="email" placeholder="Email" className='textField demoemail' autoComplete="off"/>
              <br/>
              <label htmlFor="password"> </label>
              <input id="password" placeholder="Password" onChange={this.update('password')} type="password" className='textField demopassword' autoComplete="off"/>

              <br/>
              <input type="submit" value={this.props.formType} className='sessionSignin'/>
            </form>
          </div>
          <div>
            <a href="https://github.com/kevinktom" className="github" target="_blank"><img src={window.github} /> </a>
            <a href="https://www.linkedin.com/in/kevinktom/" className="linkedin" target="_blank"><img src={window.linkedin} /> </a>
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