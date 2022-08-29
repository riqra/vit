import styled from 'styled-components';
import globalStyle from "../../globals/style";

const Button = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 100px;
  left: 17px;
  background-color: #25d366;
  border-radius: 50px;
  text-align: center;
  z-index: 100; 
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 8px 0px, rgb(0 0 0 / 3%) 0px 3px 4px 0px, rgb(0 0 0 / 6%) 0px 3px 3px 0px;

  @media only screen and (min-width: ${globalStyle.breakpoint.lg}) {
    width: 50px;
    height: 50px;
    bottom: 67px;
    left: 33px;
  }
`;

const Link = styled.a`
  color: ${globalStyle.color.grayscale.white};
`;

const Icon = styled.div`
  margin-top: 4px;
  font-size: 30px;
  font-family: FontAwesome !important;

  @media only screen and (min-width: ${globalStyle.breakpoint.lg}) {
    font-size: 39px;
  }
`;

export { Icon, Link, Button };
