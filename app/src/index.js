import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import registerServiceWorker from './registerServiceWorker';
import themes from './config/themes';
import DashApp from './dashApp';



import { themeConfig } from './config';
import DashAppHolder from './dashAppStyle'
ReactDOM.render(

    
        <DashAppHolder>
          <DashApp />
        </DashAppHolder>,
  document.getElementById('root')
);


registerServiceWorker();

