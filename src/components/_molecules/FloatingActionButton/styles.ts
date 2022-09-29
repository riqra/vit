import styled from 'styled-components';
import style from "../../../globals/style";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  width: ${style.spacing.s40};
  height: ${style.spacing.s40};
  background-color: ${props => props.color};
  border-radius: ${style.spacing.s32};
  z-index: ${style.zIndex.fab}; 
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 8px 0px, rgb(0 0 0 / 3%) 0px 3px 4px 0px, rgb(0 0 0 / 6%) 0px 3px 3px 0px;

  @media only screen and (min-width: ${style.breakpoint.lg}) {
    width: ${style.spacing.s48};
    height: ${style.spacing.s48};
  }

  /* &:hover{
    filter: brightness(85%);
  } */
`;

export {
  Content
};
