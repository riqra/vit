import style from "../../../globals/style";
import { iProgressBar } from "./contracts";
import { Progress } from "./styles";

const ProgressBar = ({
  value,
  max,
  color = style.palette.primary.default,
  backgroundColor = style.palette.grayscale.c10,
}: iProgressBar) => {
  return (
    <Progress
      value={value}
      max={max}
      color={color}
      backgroundColor={backgroundColor}
    />
  )
}

export default ProgressBar;
