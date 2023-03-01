import { useContext } from 'react'
import { TodoContext } from '../../Context'
import './TodoCount.less'

export default function TodoCount() {

  const { percentage } = useContext(TodoContext)

  return (
    <span className='change-bar' >
      <span className='load' style={{width: `${percentage}%`}}/>
    </span>
  )
}
