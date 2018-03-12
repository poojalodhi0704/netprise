import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius, boxShadow } from '../../config/style-util';
import WithDirection from '../../config/withDirection';
import image from '../../image/4.jpg';

const HomeWrapper = styled.div`
  
 .restaurantImageWrapper{
   img{
    width:100%;
    height: 300px;
    max-width:100%;
   }
 }
 .restaurantNameWrapper {
   h1 {
    margin-top: 20px;
    text-align:flex-start;
    content: '\f20e';
    font-family: 'Ionicons';
    font-size: 35px;
    color: inherit;
    line-height: 0;
    color: #000000;
     @media only screen and (max-width: 767px) {
     
     font-size: 16px;
    }
    }
    h3{
    margin-top: 40px;
    text-align:flex-start;
    content: '\f20e';
    font-family: 'Ionicons';
    font-size: 16px;
    color: inherit;
    line-height: 0;
    color: #000000;
    }
   
  }
  .tabWrapper2{
    h2{
        flex-direction:row;
        margin-left:30%;
        margin-top: 0px;
        
        content: '\f20e';
        font-family: 'Ionicons';
        font-size: 16px;
        color: inherit;
        line-height: 0;
        color: #000000;
        

      }
  }
  .tabWrapper1{
    h2{
        flex-direction:row;
        margin-top: 0px;
        margin-left:0%;
        
        content: '\f20e';
        font-family: 'Ionicons';
        font-size: 16px;
        color: inherit;
        line-height: 0;
        color: #000000;
          @media only screen and (max-width: 767px) {
            margin-right:10%;
     
   
    }
      }
  }
  .tabWrapper3{
    h2{
        flex-direction:row;
        margin-top: 0px;
        margin-left:60%;
       
        content: '\f20e';
        font-family: 'Ionicons';
        font-size: 16px;
        color: inherit;
        line-height: 0;
        color: #000000;
      @media only screen and (max-width: 767px) {
     
     margin-left:70%;
    }}
  }
  .informationWrapper{
    display: flex;
    padding-top: 15px;
  }
  .paddingH{
    padding-left:180px
  }
 .tableWrapper{
 	width:100%;
 	margin-bottom: 0px;
  h1{
    text-align:center;
    content: '\f20e';
    font-family: 'Ionicons';
    font-size: 26px;
    color: inherit;
    line-height: 0;
    color: #000000;}
	
	  input {
          width:100%;
          padding: 10px;
          border-radius:5px;
          cursor:text;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
          color: ${palette('text',1)};
          background-color: #fff;
          border: 1px solid ;
          border-color: #ccc;
          &:focus {
            border-color: #2A363B;
          }
        }
    button{

      display: inline-block;
      font-weight: 500;
      text-align: center;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      border: 0;
      white-space: nowrap;
      line-height: 1.5;
      padding: 0 50px;
      font-size: 13px;
      border-radius: 4px;
      height: 35px;
 	    position: relative;
      color: #ffffff;
		 background-color: #606060;
	    }
	button:hover{
		 background-color: ${palette('primary', 2)};
	}
	textarea{
		padding:10px;
	  cursor:text;
		width:100%;
		border-radius: 5px;
		resize:none;
		font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: ${palette('text',1)};
    background-color: #fff;
    border: 1px solid ;
    border-color: #ccc;
    &:focus {
            border-color: #2A363B;
        }
	}


 }
`;

export default WithDirection(HomeWrapper);
