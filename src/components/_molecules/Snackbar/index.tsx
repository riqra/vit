import { useEffect, useState } from "react";
import { Container, PositionContainer } from './styles';
import { iSnackbar } from "./contracts";

const Snackbar = ({
  autoHideDuration = 5,
  defaultPosition = false,
  children,
}: iSnackbar) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), autoHideDuration * 1000);

    return () => clearTimeout(timer);
  })

  if (!show) {
    return <></>
  }

  let snackbar = (
    <Container>
      {children}
    </Container>
  )

  if (defaultPosition) {
    snackbar = (
      <PositionContainer>
        {snackbar}
      </PositionContainer>
    )
  }

  return snackbar;
}

export default Snackbar;
