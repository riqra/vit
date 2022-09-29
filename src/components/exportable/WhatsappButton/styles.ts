import styled from 'styled-components';
import style from "../../../globals/style";

const Container = styled.div`
  position: fixed;
  bottom: 100px;
  left: 17px;
  
  @media only screen and (min-width: ${style.breakpoint.lg}) {  
    bottom: 67px;
    left: 33px;
  }
`;

export {
  Container
};
