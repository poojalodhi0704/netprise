import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {login} from '../../redux/login/actions';

import AuthWrapper from './auth.style';
import {Input} from '../input';
import {Button} from '../button';
import { withRouter } from 'react-router'



export class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      userName:'',
      password:'',
      email:'',
      redirectToReferrer: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
   
  }


   componentWillReceiveProps(nextProps){
    const IsLoggedIn = nextProps.IsLoggedIn;
    console.log(IsLoggedIn, "chec");
    if(IsLoggedIn){
      this.setState({redirectToReferrer:true});
    }
  }
   handleChange(e){
    const {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleLogin = (e) => {
   
    <Redirect to={`/netprise`}/>
   
   
   }
 
 

  render() {

    const {userName,password,email} = this.state;
    const { redirectToReferrer } = this.state;
    const IsLoggedIn = this.props;
    console.log (redirectToReferrer + "h check");
    const id = localStorage.getItem('id');

    if(redirectToReferrer){
      console.log("about to be return ");
      return <Redirect to={`/netprise`}/>;
    }
   
    else{
    return (
      <AuthWrapper>
          <div className="SignUpContentWrapper">
          <div className="SignUpContent">

          
            <div>
              <div className="headingWrapper">
                <h2>Sign In</h2>
              </div>
              <div className="LoginInForm">
                <div className="InputWrapper">
                  <Input type="text" placeholder="email" name="userName" value={userName} onChange={this.handleChange}/>
                </div>
                <div className="InputWrapper">
                  <Input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange}/>
                </div>
                <div className="">
                  <Button label="Sign In" onClick={this.handleLogin}/>
                 
                </div>
                
             
          
               </div>
            </div>
          </div>
          </div>
      </AuthWrapper>

    );
  }
  
  
  }
}
const mapStateToProps = (state) =>{
  console.log("access token");
  console.log(state.Login.access_token);
  return {
    IsLoggedIn : state.Login.access_token ,
   
    
  }

}
export default connect(mapStateToProps)(Login);