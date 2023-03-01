import { ReactNode } from 'react'

import './TodoList.less'

interface props {
  children: ReactNode
}

export default function TodoList({children}: props) {
  return (
    <div className='todo-list'>
      {children}
    </div>
  )
}
