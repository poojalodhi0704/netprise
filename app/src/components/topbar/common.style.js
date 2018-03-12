import styled from 'styled-components';
import { palette } from 'styled-theme';
import bgImage from '../../image/sign.jpg';
import WithDirection from '../../config/withDirection';

const CommonWrapper = styled.div`
 
        .buttonWrapper {
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
              padding: 0 20px;
              font-size: 13px;
              border-radius: 4px;
              height: 30px;
              position: relative;
              color: #ffffff;
              background-color: #606060;
        }

        button:hover{
           background-color: ${palette('primary', 2)};
        }
      }`;

export default WithDirection(CommonWrapper);
