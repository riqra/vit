import { useEffect, useState } from 'react'
import cookie from '../../../utils/cookie';
import session from '../../../utils/session';
import Backdrop from '../../_atoms/Backdrop';
import { iModalForImages } from './contracts';
import {
  Container,
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
  showAgainInXHours = 0,
  showWhenLoggedIn = false
}: iModalForImages) => {
  const [show, setShow] = useState(false);

  const cookieName = '__VIT_MODAL_FOR_IMAGES__' + id;

  const onClick = () => {
    setShow(false);
    if (!cookie.get(cookieName)) {
      cookie.set(cookieName, true, showAgainInXHours);
    }
  };

  useEffect(() => {
    if (!cookie.get(cookieName)) {
      if (showWhenLoggedIn) {
        if (session.loggedIn) {
          setShow(true);
        }
      } else {
        setShow(true);
      }
    }
  }, [cookieName, showWhenLoggedIn])

  if (!show) {
    return <></>
  }

  let picture = <Image src={image} width={imageWidth} alt="Anuncio" />

  if (link) {
    picture = (
      <a href={link} target={linkTarget}>
        {picture}
      </a>
    )
  }

  return (
    <Backdrop show={true} onClick={onClick}>
      <Container>
        <Content onClick={e => e.stopPropagation()}>
          <CloseBtn onClick={onClick}>&times;</CloseBtn>
          <div>
            {picture}
          </div>
        </Content>
      </Container>
    </Backdrop>
  );

}

export default ModalForImages;
