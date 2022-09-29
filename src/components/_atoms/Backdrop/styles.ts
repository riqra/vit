import styled from "styled-components";
import style from "../../../globals/style";

const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  inset: 0px;
  background-color: ${style.palette.grayscale.darkBackground};
  z-index: ${style.zIndex.drawer};
`

export {
  Container
};
