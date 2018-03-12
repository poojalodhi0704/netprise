import React,{Component} from react;
import TodayCalendarList from './TodayCalendarList';


export class TodayCalendar extends Component{

  render() {
    const { price,quantity,name,cancelQuantity} = this.props;
    let {result} = this.props;
    if(result !== null){
        result = result.filter(function(item){
          return item !== undefined;
        });
    }
  const items = result.map((d)=><TodayCalendar name={d.name} stDate={d.stDate} enDate={d.enDate}/> );
   return (
     <ul>
      {items}
      </ul>
     
    );
  }
}
export default connect() (TodayCalendar);
