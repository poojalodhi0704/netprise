import styled from 'styled-components';
import { palette } from 'styled-theme';

import WithDirection from '../../config/withDirection';

const AuthWrapper = styled.div`
 
  width: 100%;
  min-height: 75vh;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top:10px;
  @media only screen and (max-width: 767px) {
   width:100%:
   height:75vh;
   min-height:75vh;

    }

  .SignUpContentWrapper {
    width: 500px;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
     @media only screen and (max-width: 767px) {
     width:100%;
     height:100%;


    }
  }
  .SignUpContent {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  
    padding-bottom:20px;
    padding-top: 70px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    background-color: #ffffff;

    @media only screen and (max-width: 767px) {
      width: 100%;

      
    }
    @media only screen and (max-width: 1366px) {
      width: 100%;
      padding-bottom:20px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    }
    
    @media only screen and (max-width: 1280px) {
      width: 100%;
      padding-bottom:20px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    }
    }


      .isoLeftRightComponent {
        input {
          width: calc(100% - 10px);

          &:first-child {
            margin-right: ${props =>
              props['data-rtl'] === 'rtl' ? 'inherit' : '20px'};
            margin-left: ${props =>
              props['data-rtl'] === 'rtl' ? '20px' : 'inherit'};
          }
        }
      }

  .icon{
    margin-left: 440px;
    margin-top: 20px;
      i {
          font-size: 24px;
          color: ${palette('text', 0)};
          line-height: 1;
          color: ${palette('primary',1)};

        }

  }
  .forgotPassword{
    margin-top: 20px;

    p{
      font-weight: 300px;
      color: ${palette('primary',1)};
    }
  }

  .headingWrapper{
    margin-bottom: 10px;
    margin-top: 0px;
    justify-content: center;
    flex-shrink: 0;
    h2 {
      font-weight: 600;
      line-height: 1;
      color: ${palette('primary',1)};

    }
  }
  .headingWrapper1{
    margin-bottom: 0px;
    margin-top: 0px;
    justify-content: center;
    flex-shrink: 0;
    h1 {
      font-weight: 600;
      line-height: 1;
      color: ${palette('primary',1)};

    }
  }
  .headingWrapper2{
    margin-bottom: 10px;
    
    justify-content: center;
    flex-shrink: 0;
    h3 {
      font-weight: 600;
      line-height: 1;
      color: ${palette('primary',1)};

    }
  }
  .linkForm{
    display: flex;
    margin-top:50%;
     border-top-style: groove;
   
      flex-shrink: 0;
      flex-direction: row;
      @media only screen and (max-width: 767px) {
      margin-top:10%;
    }
    @media only screen and (max-width: 1366px) {
      margin-top:10%;
    }
      p{
        margin-top:5%;
        margin-right:5%;
        font-size:18px;
         @media only screen and (max-width: 767px) {
     font-size: 13px;
    }

        
        
      }
      button{
         margin-top:5%;

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
      padding: 0 120px;
      font-size: 13px;
      border-radius: 4px;
      height: 35px;
      position: relative;
      color: #ffffff;
      

      background-color: ${palette('primary', 0)};
      @media only screen and (max-width: 767px) {
     padding: 0 75px;

    }
    
      }

  
  }
  .LoginInForm {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;

      .InputWrapper {
        margin-bottom: 15px;


        
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

        .buttonWrapper {
        
          margin-top : 20px;
          margin-bottom: 20px;
          margin-left: 140px;
        }

       
      }
`;

export default WithDirection(AuthWrapper);
