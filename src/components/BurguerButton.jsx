import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function BurguerButton(props) {
  return (
    <div onClick={props.handleClick} className="bar-btn">
        <FontAwesomeIcon icon={faBars} />
    </div>
  )
}

export default BurguerButton