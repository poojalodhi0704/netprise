import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputSearch } from '../../components/uielements/input';
import {Button} from '../button';
import {Input} from '../input';

import CommonWrapper from  './common.style';
import {Login} from '../auth';
import {logout} from '../../redux/logout/actions';


class TopbarButton extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      visiblity: false
    };
  }
  componentDidMount(){
    
  }
  handleLogout(){
    const {dispatch} = this.props;
   
    dispatch(logout());
    this.props.history.push('/signup');
  }

    

  handleOk() {
    this.setState({
      visible: false
    });
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }
  showModal() {
    this.setState({
      visible: true
    });
  }
  render() {
    const token = localStorage.getItem('access_token');
    const name = localStorage.getItem('name');
    const { url,customizedTheme } = this.props;
    const { visible } = this.state;
    
    if(token){
      return(
      <div >
        <CommonWrapper>
        <div className="buttonWrapper">
       
        <button type="primary" onClick={this.handleLogout}>Logout</button>
        </div>
        </CommonWrapper>
        </div>);

    }
    else{
      return(
        <div>
        You need to be login

        </div>
        );
  
  }
}
}

export default connect()(TopbarButton);
