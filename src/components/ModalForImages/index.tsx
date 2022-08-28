import React from 'react'
import cookie from '../../utils/cookie';
import {
  Backdrop,
  Content,
  CloseBtn,
  Image
} from './style';

interface iModalForImages {
  id: string,
  image: string,
  link?: string,
  imageWidth?: string,
  linkTarget?: string,
  showAgainInXHours?: number
}

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

    let picture = <Image className="vit-modal__image" src={image} style={{ width: imageWidth }} alt="Anuncio" />

    if (link) {
      picture = (
        <a className="vit-modal__link" href={link} target={linkTarget}>
          {picture}
        </a>
      )
    }

    return (
      <div id="vit-modal" className="vit-modal" style={{ display: this.state.hide ? 'none' : 'block' }}>
        <Backdrop onClick={this.onClick}>
          <Content onClick={e => e.stopPropagation()}>
            <CloseBtn onClick={this.onClick}>&times;</CloseBtn>
            <div>
              {picture}
            </div>
          </Content>
        </Backdrop>
      </div>
    );
  }
}

export default ModalForImages;
