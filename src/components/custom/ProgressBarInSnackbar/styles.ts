import styled from "styled-components";
import style from "../../../globals/style";

const Container = styled.div`
   flex-grow: 1;
`;

const Text = styled.div`
  color: ${style.palette.grayscale.white};
  margin-bottom: ${style.spacing.s8};
`;

export {
  Container,
  Text
};
