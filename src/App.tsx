import TodoList from './Components/TodoList/TodoList'
import TodoItem from './Components/TodoItem/TodoItem'
import TodoCount from './Components/TodoCount/TodoCount'
import AddButton from './Components/AddButton/AddButton'
import Header from './Components/Header/Header'

import './App.less'
import './styles/variables.less'

import { useTodos } from './Hooks/useTodos'
import Modal from './Components/Modal/Modal'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoSearch from './Components/TodoSearch/TodoSearch'
import ChangeWithStorageListener from './Components/ChangeStorage/ChangeStorage'

function App() {

  const {
    showTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    setSearchValue,
    onHideComplete,
    hiden,
    onDarkMode,
    darkMode,
    percentage,
    onOpenModal,
    openModal,
    addTodo,
    sincInfo,
    sincTheme
  } = useTodos()

  return (
    <div className={`container ${darkMode ? 'darkMode' : 'lightMode'}`}>
      
      <Header
        onHideComplete={onHideComplete}
        hiden={hiden}
        onDarkMode={onDarkMode}
        darkMode={darkMode}
      >
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>
      
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

      <TodoCount percentage={percentage}/>

      <AddButton
        onOpenModal={onOpenModal}
        openModal={openModal}
      />

      {
        openModal &&
        <Modal>
          <TodoForm
            onOpenModal={onOpenModal}
            addTodo={addTodo}
            darkMode={darkMode}
          />
        </Modal>
      }

      <ChangeWithStorageListener 
        sincInfo={sincInfo}
        sincTheme={sincTheme}
      />
    </div>
  )
}

export default App
