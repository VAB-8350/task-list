import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { TodoContext } from '../../Context'

import './AddButton.less'

export default function AddButton() {

  const { onOpenModal, openModal} = useContext(TodoContext)

  return (
    <button className={`add-btn ${openModal ? 'active' : ''}`} onClick={onOpenModal}>
      <FontAwesomeIcon icon={faPlus} className='icon' />
    </button>
  )
}
