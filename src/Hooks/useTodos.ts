import { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from './useLocalStorage'

type todo = {
  text: string
  completed: boolean
}

function useTodos() {

  const initialVal = [
    {text: 'Esta tarea es una demo', completed: false},
    {text: 'Elimina y comienza a crear las tuyas', completed: true},
  ]

  // Hooks
  const {
    item : todos,
    saveItem: saveTodos,
    sincronize: sincInfo
  } = useLocalStorage<todo[]>('TODOS_V1', initialVal)
  const {
    item : modeDark,
    saveItem: saveModeDark,
    sincronize: sincTheme
  } = useLocalStorage<boolean>('MODO_V1',true)

  // Local State
  const [searchValue, setSearchValue] = useState('');
  const [hideComplete, setHideComplete] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [darkMode, setDarkMode] = useState(modeDark)
  
  // Constants
  const percentage = todos.filter((t: todo) => t.completed).length * 100 / todos.length
  
  let showTodos: todo[] = []

  hideComplete
    ? showTodos = todos.filter((t: todo) => !t.completed)
    : showTodos = todos
  
  !(searchValue.length > 0)
    ? showTodos = showTodos
    : showTodos = showTodos.filter((t: todo) => t.text.toLowerCase().includes(searchValue.toLowerCase()))


  //Methods
  const completeTodo = (index: number) => {
    todos[index].completed = !todos[index].completed
    saveTodos([...todos])
  }

  const deleteTodo = (index: number) => {
    todos.splice(index, 1)
    saveTodos([...todos])
  }

  const addTodo = (text: string) => {
    todos.push({text, completed: false})
    saveTodos([...todos])
  }

  const changeMode = () => {
    saveModeDark(!darkMode)
    setDarkMode(!darkMode)
  }

  return {
      showTodos,
      percentage,
      deleteTodo,
      completeTodo,
      addTodo,
      searchValue,
      setSearchValue,
      onHideComplete: () => setHideComplete(!hideComplete),
      hiden: hideComplete,
      onOpenModal: () => setOpenModal(!openModal),
      openModal,
      onDarkMode: changeMode,
      darkMode,
      sincInfo,
      sincTheme
    }
}

export { useTodos }