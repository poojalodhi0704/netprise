import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link,Route,Switch,Redirect } from 'react-router-dom';
import basicStyle from '../../config/basicStyle';
import { Row, Col} from 'antd';
import HomeWrapper from './home.style';
import StyleWrapper from '../../components/appcontent/wrapper';
import IsoWidgetBox from '../../components/appcontent/box';
import IsoWidgetsWrapper from '../../components/appcontent/wrapper';
import IntlMessages from '../../components/utility/intlMessages';
import FullCalender from '../Calendar/Calendar';

export class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			IsLoaded : true,
		};
		
	}
	 componentWillReceiveProps(nextProps){
      const add1 = nextProps.add1;
      const id = nextProps.id;
      if(add1){
      	this.setState({IsLoaded: true});
      	
      }
    }


	componentDidMount(){
		const token = localStorage.getItem('access_token');
		if(token){
		
	    }
	    else{
		this.props.history.push('/login');
	    }

    }
    render(){
		const {name,startDate,endDate,date} = this.props;
		const {IsLoaded} = this.state;
		const { rowStyle, colStyle } = basicStyle;
		const HomePageStyle = {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'flex-start',
			overflow: 'hidden',
			padding: '18px',
		};
	    
	    return(
		 	<div>
		 		<HomeWrapper>
		 			<div style={HomePageStyle}>
						<Row style={rowStyle} gutter={0} justify="start">
				 			 <Col md={24} sm={24} xs={24} style={colStyle}>
				  				<IsoWidgetBox height= {100} padding={0}>
				   				<StyleWrapper>
				   				<div>
				   				<FullCalender/>
				   				</div>
				   				</StyleWrapper> 
				   				</IsoWidgetBox>
				  			</Col>
				 		</Row>
				 		
					</div>
				</HomeWrapper>
					
		    </div>);
	
  }
}
const mapStateToProps = (state) => {
return{

}

};
export default connect(mapStateToProps)(Home);