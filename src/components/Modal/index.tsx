import React from 'react'
import './index.css'
import cookie from '../../utils/cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface iModal {
  id: string,
  content: JSX.Element,
  showAgainInXHours?: number
}

interface iState {
  hide: boolean
}

class Modal extends React.Component<iModal, iState>{

  constructor(props: iModal) {
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
      content,
      showAgainInXHours = 0
    } = this.props;

    const cookieName = '__VIT_MODAL__' + id;

    if (cookie.get(cookieName)) {
      return;
    }

    cookie.set(cookieName, true, showAgainInXHours);

    return (
      <div className="vit-modal" style={{ display: this.state.hide ? 'none' : 'block' }}>
        <div className="vit-modal__backdrop" onClick={this.onClick}>
          <div className="vit-modal__content" onClick={e => e.stopPropagation()}>
            <div className="vit-modal__btn-close" onClick={this.onClick}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
