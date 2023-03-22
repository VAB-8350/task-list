import React, { useEffect } from 'react'
import WithStorageListener from './withStorageListener'

interface props {
  show: boolean
  toggleShow: () => void
  sincInfo: () => void
}

function ChangeStorage({show, toggleShow, sincInfo}: props) {

  useEffect(() => {
    if (show) {
      toggleShow()
    }
  }, [show])

  return null
}

const ChangeWithStorageListener = WithStorageListener(ChangeStorage)

export default  ChangeWithStorageListener 