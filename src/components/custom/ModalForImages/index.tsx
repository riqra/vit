import { useEffect, useState } from 'react'
import cookie from '../../../utils/cookie';
import { iModalForImages } from './contracts';
import {
  Container,
  Backdrop,
  Content,
  CloseBtn,
  Image
} from './styles';

const ModalForImages = ({
  id,
  image = 'https://res.cloudinary.com/riqra/image/upload/h_380,c_limit,q_auto,f_auto/v1534706090/saas/resources/placeholders/product.png',
  link,
  imageWidth = '450px',
  linkTarget = '_self',
  showAgainInXHours = 0
}: iModalForImages) => {
  const [show, setShow] = useState(false);

  const onClick = () => setShow(false);

  useEffect(() => {
    const cookieName = '__VIT_MODAL_FOR_IMAGES__' + id;

    if (!cookie.get(cookieName)) {
      setShow(true);
    }

    return () => {
      if (!cookie.get(cookieName)) {
        cookie.set(cookieName, true, showAgainInXHours);
      }
    }
  }, [id, showAgainInXHours])

  let picture = <Image src={image} width={imageWidth} alt="Anuncio" />

  if (link) {
    picture = (
      <a href={link} target={linkTarget}>
        {picture}
      </a>
    )
  }

  return (
    <Container show={show}>
      <Backdrop onClick={onClick}>
        <Content onClick={e => e.stopPropagation()}>
          <CloseBtn onClick={onClick}>&times;</CloseBtn>
          <div>
            {picture}
          </div>
        </Content>
      </Backdrop>
    </Container>
  );

}

export default ModalForImages;
