import styled from "styled-components";
import style from "../../../globals/style";

const Container = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'flex' : 'none'};
  z-index: ${style.zIndex.snackbar};
  position: fixed;
  left: ${style.spacing.s8};
  right: ${style.spacing.s8};
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  bottom: ${style.spacing.s8};
  @media only screen and (min-width: ${style.breakpoint.sm}) {
    bottom: ${style.spacing.s24};
    left: ${style.spacing.s24};
    right: auto;
  }
`

const Content = styled.div`
  border-radius: ${style.spacing.s4};
  background-color: ${style.palette.grayscale.c80};
  padding: ${style.spacing.s16} ${style.spacing.s16};
  min-height: ${style.spacing.s24};
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: ${style.typography.fontSize.s14};
  @media only screen and (min-width: ${style.breakpoint.sm}) {
    min-width: ${(style.spacing.gridSize * 36) + 'px'};
  }
`;

export {
  Container,
  Content
};
