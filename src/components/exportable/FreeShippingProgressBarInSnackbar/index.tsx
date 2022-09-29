import ProgressBar from "../../_atoms/ProgressBar";
import Snackbar from "../../_molecules/Snackbar";
import { iFreeShippingProgressBarInSnackbar } from "./contracts";
import { Content, Text } from './styles';

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
    <Snackbar autoHideDuration={autoHideDuration} defaultPosition={true}>
      <Content>
        <Text>¡Solo te faltan {currencySymbol}{minCartValueForFreeShipping - cartValue} para tener delivery gratis!</Text>
        <ProgressBar
          value={cartValue}
          max={minCartValueForFreeShipping}
          color={progressBarColor}
          backgroundColor={progressBarBackgroundColor}
        />
      </Content>
    </Snackbar>
  )
}

export default FreeShippingProgressBarInSnackbar;
