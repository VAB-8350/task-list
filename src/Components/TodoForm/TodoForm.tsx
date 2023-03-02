import React, { useContext, useState } from 'react'
import { TodoContext } from '../../Context'
import './TodoForm.less'
import '../../styles/variables.less'

export default function TodoForm() {

  const { onOpenModal, addTodo, darkMode} = useContext(TodoContext)
  const [textValue, setTextValue] = useState('')

  const submit = () => {
    textValue.length > 0 && addTodo(textValue)
    onOpenModal()
  }

  return (
    <div className={`container-modal general ${darkMode ? 'darkMode' : 'lightMode'}`}>
      <label htmlFor="task">Nueva tarea</label>
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        name="task"
        id="task"
        cols={25}
        rows={6}
        placeholder='Pasear el perro'
      />

      <div className='container-btn'>
        <button className='btn-cancel' onClick={onOpenModal}>Cancelar</button>
        <button className='btn-submit' onClick={submit} disabled={textValue.length === 0}>Aceptar</button>
      </div>
    </div>
  )
}
