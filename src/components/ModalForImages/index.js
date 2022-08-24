import React from 'react'
import './index.css'

class ModalForImages extends React.Component {

  constructor(props) {
    super(props);
    this.image = props.image;
    this.link = props.link;
    this.imageWidth = props.imageWidth || '450px';
    this.linkTarget = props.linkTarget || '_self';
    this.state = { hide: false };
  }

  onClick = (e) => {
    this.setState({
      hide: true
    });
  }

  render() {

    if (!this.image) {
      return (<div></div>)
    }

    let image = <img className="vit-modal__image" src={this.image} style={{ width: this.imageWidth }} alt="Anuncio" />

    if (this.link) {
      image = (
        <a className="vit-modal__link" href={this.link} target={this.linkTarget}>
          {image}
        </a>
      )
    }

    return (
      <div id="vit-modal" className="vit-modal" style={{ display: this.state.hide ? 'none' : 'block' }}>
        <div className="vit-modal__backdrop" onClick={this.onClick}>
          <div className="vit-modal__content" onClick={e => e.stopPropagation()}>
            <div className="vit-modal__btn-close" onClick={this.onClick}>&times;</div>
            <div className="vit-modal__body">
              {image}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalForImages;
