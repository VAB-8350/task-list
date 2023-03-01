import TodoList from './Components/TodoList/TodoList'
import TodoItem from './Components/TodoItem/TodoItem'
import TodoCount from './Components/TodoCount/TodoCount'
import AddButton from './Components/AddButton/AddButton'
import Header from './Components/Header/Header'

import './App.less'
import './styles/variables.less'

import { TodoContext } from './Context'
import { useContext } from 'react'
import Modal from './Components/Modal/Modal'
import TodoForm from './Components/TodoForm/TodoForm'

function App() {

  const {
    showTodos,
    completeTodo,
    deleteTodo,
    openModal,
    darkMode
  } = useContext(TodoContext)

  return (
    <div className={`container ${darkMode ? 'darkMode' : 'lightMode'}`}>
      <Header />
      <TodoList>
        {
          showTodos.map((todo, index) => 
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
          )
        }
      </TodoList>
      <TodoCount />
      <AddButton />

      {
        openModal &&
        <Modal>
          <TodoForm />
        </Modal>
      }
    </div>
  )
}

export default App
