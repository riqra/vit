import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  overflow: auto;
  background-color: rgba(51, 51, 51, 0.3);
  padding: 0px 16px;
  z-index: 99;
  opacity: 1;
  pointer-events: auto;
`;

const Content = styled.div`
  position: relative;
  background-color: white;
  margin: auto;
  height: auto;
  width: auto;
  overflow: hidden;
  padding: 20px;
  border-radius: 4px;
`;

const CloseBtn = styled.div`
  color: #aaaaaa;
  float: right;
  line-height: 17px;
  font-size: 28px;
  font-weight: bold;
  &:hover, &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: ${props => props.width};
`;

export {
  Container,
  Backdrop,
  Content,
  CloseBtn,
  Image
}
