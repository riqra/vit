import Link from "../../_atoms/Link";
import { iFloatingActionButton } from "./contracts";
import { Content as Container } from "./styles";

const FloatingActionButton = ({
  href,
  target = "_blank",
  rel = "noreferrer",
  color,
  colorLink,
  children
}: iFloatingActionButton) => {
  return (
    <Container color={color}>
      <Link href={href} target={target} rel={rel} color={colorLink}>
        {children}
      </Link>
    </Container>
  )
}

export default FloatingActionButton;
