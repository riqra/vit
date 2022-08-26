import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';

const style: any = {
  content: {
    textAlign: 'center',
    paddingBottom: '8px',
    width: '300px',
    backgroundColor: 'white'
  },
  icon: {
    color: '#ff2d54',
    fontSize: '40px',
    marginBottom: '8px'
  }
}

interface iErrorPlugin {
  id: string,
  componentName: string,
  reason: string
}

const ErrorPlugin = (props: iErrorPlugin) => {
  return (
    <Modal id={props.id} content={
      <div style={style.content}>
        <div style={style.icon}>
          <FontAwesomeIcon icon={faCircleExclamation} />
        </div>
        <div>No se pudo cargar el plugin {props.componentName}. {props.reason}</div>
      </div>
    } />
  )
}

export default ErrorPlugin;
