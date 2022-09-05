import ProgressBar from "../../base/ProgressBar";
import Snackbar from "../../base/Snackbar";
import { iFreeShippingProgressBarInSnackbar } from "./contracts";
import { Container, Text } from './styles';

const FreeShippingProgressBarInSnackbar = ({
  id,
  currencySymbol,
  cartValue,
  minCartValueForFreeShipping,
  autoHideDuration,
  progressBarColor,
  progressBarBackgroundColor,
}: iFreeShippingProgressBarInSnackbar) => {
  return (
    <Snackbar autoHideDuration={autoHideDuration}>
      <Container>
        <Text>¡Solo te faltan {currencySymbol}{minCartValueForFreeShipping - cartValue} para tener delivery gratis!</Text>
        <ProgressBar
          value={cartValue}
          max={minCartValueForFreeShipping}
          color={progressBarColor}
          backgroundColor={progressBarBackgroundColor}
        />
      </Container>
    </Snackbar>
  )
}

export default FreeShippingProgressBarInSnackbar;
