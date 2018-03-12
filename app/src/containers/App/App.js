import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import {Link,BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Topbar from '../Topbar/Topbar';
import { siteConfig } from '../../config.js';
import { AppLocale } from '../../index';
import themes from '../../config/themes';
import AppHolder from './commonStyle';
import './global.css';
import Home from '../Home/Home';


import {Login} from '../../components/auth';



const { Content, Footer } = Layout;

export class App extends Component {
  render() {

      
      const { locale, selectedTheme } = this.props;
      const token =  localStorage.getItem('access_token');
     
               return (
                <BrowserRouter>
                <AppHolder>
                    <Layout style={{ height: '100vh' }}>
                                <Route path="/" component={Topbar} />
                              
                               <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                               <Layout
                                className="isoContentMainLayout"
                                style={{
                                  height: '100vh'
                                }}
                              >
                             
                              <Content
                                  className="isomorphicContent"
                                  style={{
                                    padding: '70px 0 0',
                                    flexShrink: '0',
                                    background: '#f1f3f6'
                                  }}
                                >
                                <Switch>
                               
                                 <Route path={'/login'} component={Login}/>
                                 <Route path={'/netprise'} component={Home}/>
                                 
                                </Switch>
                               
                              </Content>
                             
                            </Layout>
                        </Layout>
                    </Layout>
                </AppHolder>
                </BrowserRouter>);
  }
}
export default connect()(App);
