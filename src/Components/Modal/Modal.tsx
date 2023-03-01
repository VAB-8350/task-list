import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import './Modal.less'
type props = {children:ReactNode}

export default function Modal({children}: props ) {

  const modalRoot = document.getElementById('modal')

  if (!modalRoot) {
    throw new Error('Unable to find modal root element')
  }

  return ReactDOM.createPortal(
    <div className='background'>
      {children}
    </div>,
    modalRoot
  )
}
