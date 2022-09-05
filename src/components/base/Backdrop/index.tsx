import { iBackdrop } from "./contracts";
import { Container } from "./styles";

const Backdrop = ({
  children,
  onClick,
  show = false
}: iBackdrop) => {

  if (!show) {
    return <></>
  }

  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  )
}

export default Backdrop;
