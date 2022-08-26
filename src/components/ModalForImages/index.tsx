import React from 'react'
import iModalForImages from '../../contracts/iModalForImages';
import Modal from '../Modal';

const style: any = {
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block'
  }
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

    if (!image) {
      return;
    }

    style.image.width = imageWidth;

    let picture = <img style={style.image} src={image} alt="Anuncio" />

    if (link) {
      picture = (
        <a href={link} target={linkTarget}>
          {picture}
        </a>
      )
    }

    return (
      <Modal id={id} showAgainInXHours={showAgainInXHours} content={picture} />
    );
  }
}

export default ModalForImages;
