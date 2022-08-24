import React from 'react'
import './index.css'
import cookie from '../../utils/cookie';

class ModalForImages extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.image = props.image;
    this.link = props.link;
    this.imageWidth = props.imageWidth || '450px';
    this.linkTarget = props.linkTarget || '_self';
    this.showAgainInXHours = isNaN(+props.showAgainInXHours) ? 0 : +props.showAgainInXHours;
    this.cookieName = '__VIT_MODAL_FOR_IMAGES__' + this.id;
    this.state = {
      hide: false
    };
  }

  onClick = (e) => {
    this.setState({
      hide: true
    });
  }

  render() {
    if (!this.image) {
      return;
    }

    if (cookie.get(this.cookieName)) {
      return;
    }

    let picture = <img className="vit-modal__image" src={this.image} style={{ width: this.imageWidth }} alt="Anuncio" />

    if (this.link) {
      picture = (
        <a className="vit-modal__link" href={this.link} target={this.linkTarget}>
          {picture}
        </a>
      )
    }

    cookie.set(this.cookieName, true, this.showAgainInXHours);

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
