import React,{Component} from 'react';

export class TodayCalendarList extends Component{

	render(){
		return(
				<TopbarCartWrapper className="isoCartItems">
			  <li>
			 	<div className="isoCartDetails">
	          		<h3>
	            		<a href="#">{name}</a>
	                </h3>
	                <p className="isoItemPriceQuantity">
	                {stDate}
            		</p>
            		<p className="isoItemPriceQuantity">
	                {enDate}
            		</p>
             	</div>
        		
          	</li>
          	</TopbarCartWrapper>);
	}
}
export default TodayCalendarList;