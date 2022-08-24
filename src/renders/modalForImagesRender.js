import React from 'react';
import ModalForImages from "../components/ModalForImages";
import Render from './Render';

const ModalForImagesRender = (id) => {
  const elem = document.getElementById(id);
  Render(
    elem,
    <ModalForImages
      id={id}
      image={elem.dataset.image}
      imageWidth={elem.dataset.imageWidth}
      link={elem.dataset.link}
      linkTarget={elem.dataset.linkTarget}
      showAgainInXHours={elem.dataset.showAgainInXHours}
    />
  );
}

export default ModalForImagesRender;
