import styled from "styled-components";
import style from "../../../globals/style";

const PositionContainer = styled.div`
  z-index: ${style.zIndex.snackbar};
  position: fixed;
  left: ${style.spacing.s8};
  right: ${style.spacing.s8};
  bottom: ${style.spacing.s8};
  @media only screen and (min-width: ${style.breakpoint.sm}) {
    bottom: ${style.spacing.s24};
    left: ${style.spacing.s24};
  }
`;

const Container = styled.div`
  display: flex;
  border-radius: ${style.spacing.s4};
  background-color: ${style.palette.grayscale.c80};
  padding: ${style.spacing.s16} ${style.spacing.s16};
  min-height: ${style.spacing.s24};
  align-items: center;
  flex-grow: 1;
  font-size: ${style.typography.fontSize.s14};
  @media only screen and (min-width: ${style.breakpoint.sm}) {
    min-width: ${style.spacing.s(36)};
    width: fit-content;
  }
`;

export {
  PositionContainer,
  Container
};
