import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './AddButton.less'

interface props {
  onOpenModal: () => void
  openModal: boolean
}

export default function AddButton({ onOpenModal, openModal}: props) {

  return (
    <button className={`add-btn ${openModal ? 'active' : ''}`} onClick={onOpenModal}>
      <FontAwesomeIcon icon={faPlus} className='icon' />
    </button>
  )
}
