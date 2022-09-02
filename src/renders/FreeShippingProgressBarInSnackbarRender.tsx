import FreeShippingProgressBarInSnackbar from '../components/custom/ProgressBarInSnackbar';
import { iFreeShippingProgressBarInSnackbar } from '../components/custom/ProgressBarInSnackbar/contract';
import Render from './Render';

const FreeShippingProgressBarInSnackbarRender = (params: iFreeShippingProgressBarInSnackbar) => {
  if (!params.id) {
    return;
  }

  Render(
    params.id,
    <FreeShippingProgressBarInSnackbar
      id={params.id}
      cartValue={params.cartValue}
      minCartValueForFreeShipping={params.minCartValueForFreeShipping}
      currencySymbol={params.currencySymbol}
      progressBarColor={params.progressBarColor}
      progressBarBackgroundColor={params.progressBarBackgroundColor}
      autoHideDuration={params.autoHideDuration}
    />
  );
}

export default FreeShippingProgressBarInSnackbarRender;
