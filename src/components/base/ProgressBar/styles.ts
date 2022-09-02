import styled from "styled-components";
import style from "../../../globals/style";
import { iProgressBar } from "./contracts";

const Progress = styled.div<iProgressBar>`
  position: relative;
  height: ${style.spacing.s8};
  background: ${props => props.backgroundColor};
  border-radius: ${style.spacing.s8};
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: ${props => (props.value / props.max) * 100 + '%'};
    background: ${props => props.color};
  }
`;

export {
  Progress
}
