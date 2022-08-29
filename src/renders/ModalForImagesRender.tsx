import ModalForImages, { iModalForImages } from "../components/ModalForImages";
import Render from './Render';

const ModalForImagesRender = (params: iModalForImages) => {
  if (!params.id) {
    return;
  }

  Render(
    params.id,
    <ModalForImages
      id={params.id}
      image={params.image}
      imageWidth={params.imageWidth}
      link={params.link}
      linkTarget={params.linkTarget}
      showAgainInXHours={params.showAgainInXHours}
    />
  );
}

export default ModalForImagesRender;
