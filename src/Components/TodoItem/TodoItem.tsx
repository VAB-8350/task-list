import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Switch from './../Switch/Switch'

import './TodoItem.less'

interface props {
  text: string
  completed: boolean
  onComplete: () => void
  onDelete: () => void
}

export default function TodoItem({text, completed, onComplete, onDelete}: props) {
  return (
    <div className='card'>
      <div className='text-content'>
        <h3 className={completed ? 'done' : ''}>{text}</h3>
      </div>
      
      <section>
        <Switch completed={completed} onComplete={onComplete}/>
        <button onClick={onDelete} className='trash'>
          <FontAwesomeIcon icon={faTrash} className='icon'/>
        </button>
      </section>
    </div>
  )
}
