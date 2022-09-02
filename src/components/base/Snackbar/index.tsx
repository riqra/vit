import { useEffect, useState } from "react";
import { Container, Content } from './styles';
import { iSnackbar } from "./contracts";

const Snackbar = ({
  autoHideDuration = 5,
  children
}: iSnackbar) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), autoHideDuration * 1000);

    return () => clearTimeout(timer);
  })

  return (
    <Container show={show}>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Snackbar;
