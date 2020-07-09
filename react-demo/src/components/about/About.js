import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class About extends Component{
  render() {
    if(this.props.isLogin === false){
      return <Redirect to="/" />
    }
    return (
      <div>
        <div>
          <button onClick={this.userLogout.bind(this)}>Logout</button>
        </div>
        <div>
          <h3>About</h3>
          <p>Hi, this is about page.</p>
        </div>
      </div>
    )
  }
  userLogout(){
    this.props.LOGOUT(this.props.history)
  }
  componentDidMount(){
    console.info('About redner complete.')
  }
}

export default About