import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalForImages from "../components/ModalForImages";

const modalForImagesRender = (id) => {
  const elem = document.getElementById(id);
  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      <ModalForImages
        image={elem.dataset.image}
        imageWidth={elem.dataset.imageWidth}
        link={elem.dataset.link}
        linkTarget={elem.dataset.linkTarget} />
    </React.StrictMode>
  );
}

export default modalForImagesRender;
