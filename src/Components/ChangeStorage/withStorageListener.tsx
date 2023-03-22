import { useState } from 'react'

export default function WithStorageListener(WrappedComponent) {

  
  return function WrappedComponentWithStorageListener(props) {
    
    const [storageChange, setStorageChange] = useState(false)
    
    const toggleShow = () => {
      props.sincInfo()
      setStorageChange(false)
    }

    window.addEventListener('storage', (change) => {
      change.key === 'TODOS_V1' && toggleShow()
      setStorageChange(true)
    })


    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}
