import React from 'react'
import './index.css'
import cookie from '../../utils/cookie';
import iModalForImages from '../../contracts/iModalForImages';

interface iState {
  hide: boolean
}

class ModalForImages extends React.Component<iModalForImages, iState>{

  constructor(props: iModalForImages) {
    super(props);
    this.state = {
      hide: false
    };
  }

  onClick = () => {
    this.setState({
      hide: true
    });
  }

  render() {
    const {
      id,
      image,
      link,
      imageWidth = '450px',
      linkTarget = '_self',
      showAgainInXHours = 0
    } = this.props;

    const cookieName = '__VIT_MODAL_FOR_IMAGES__' + id;

    if (!image) {
      return;
    }

    if (cookie.get(cookieName)) {
      return;
    }

    cookie.set(cookieName, true, showAgainInXHours);

    let picture = <img className="vit-modal__image" src={image} style={{ width: imageWidth }} alt="Anuncio" />

    if (link) {
      picture = (
        <a className="vit-modal__link" href={link} target={linkTarget}>
          {picture}
        </a>
      )
    }

    return (
      <div id="vit-modal" className="vit-modal" style={{ display: this.state.hide ? 'none' : 'block' }}>
        <div className="vit-modal__backdrop" onClick={this.onClick}>
          <div className="vit-modal__content" onClick={e => e.stopPropagation()}>
            <div className="vit-modal__btn-close" onClick={this.onClick}>&times;</div>
            <div className="vit-modal__body">
              {picture}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalForImages;
