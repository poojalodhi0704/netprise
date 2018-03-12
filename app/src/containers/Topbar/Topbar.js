import React, { Component } from 'react';
import { connect } from 'react-redux';

import IntlMessages from '../../components/utility/intlMessages';
import { Layout ,Menu} from 'antd';

import {Link,Route,Switch,Redirect} from 'react-router-dom';
import {siteConfig} from '../../config.js';
import TopbarWrapper from './topbar.style';
import {
  TopbarMail,
  TopbarNotification,
  TopbarMessage,
  TopbarSearch,
  TopbarUser,

  TopbarButton,

} from '../../components/topbar';


const { Header } = Layout;


class Topbar extends Component {
  render() {
    const { toggleCollapsed, url, customizedTheme, locale } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
   
      position: 'fixed',
      width: '100%',
      height: 50
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className= 'isomorphicTopbar'
          
        >
        
          <div className="isoLeft">
           <h1>NetPrise Solutions</h1>
          </div>

         

          <ul className="isoRight">
          >
          <li><Route to="/" component={TopbarButton}/></li>
          
            
          </ul>
        
    
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect()(Topbar);
