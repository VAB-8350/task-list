import { createContext, ReactNode, useState } from "react";
import useLocalStorage from './useLocalStorage'

interface TodoContextValue {
  showTodos: todo[];
  percentage: number;
  deleteTodo: (index: number) => void;
  completeTodo: (index: number) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  onHideComplete: () => void;
  hiden: boolean;
  openModal: boolean
  onOpenModal: () => void
  addTodo: (text: string) => void
  onDarkMode: () => void
  darkMode: boolean
}

const TodoContext = createContext<TodoContextValue>({
  showTodos: [],
  percentage: 0,
  deleteTodo: () => {},
  completeTodo: () => {},
  searchValue: "",
  setSearchValue: () => {},
  onHideComplete: () => {},
  hiden: false,
  openModal: false,
  onOpenModal: () => {},
  addTodo: () => {},
  onDarkMode: () => {},
  darkMode: true
});

interface props {
  children: ReactNode
}

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
  const [todos, saveTodos] = useLocalStorage<todo[]>('TODOS_V1', initialVal)
  const [modeDark, saveModeDark] = useLocalStorage<boolean>('MODO_V1',true)

  // Local State
  const [searchValue, setSearchValue] = useState('');
  const [hideComplete, setHideComplete] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [darkMode, setDarkMode] = useState(modeDark)
  
  // Constants
  const percentage = todos.filter((t: todo) => t.completed).length * 100 / todos.length
  
  // Typescript
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
      darkMode
    }
}

export { useTodos }