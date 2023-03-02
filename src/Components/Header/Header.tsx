import TodoSearch from "../TodoSearch/TodoSearch"
import { faChevronLeft, faSun, faMoon, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.less'
import { useContext } from "react"
import { TodoContext } from "../../Context"


export default function Header() {
  
  const {
    onHideComplete,
    hiden,
    onDarkMode,
    darkMode
  } = useContext(TodoContext)
 
  return (
    <div className="header">

      <section>
        <h1>
          {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
          Mis Tareas
        </h1>

        <button onClick={onDarkMode}>
          <FontAwesomeIcon className='header-mode' icon={darkMode ? faMoon : faSun} />
        </button>
      </section>

      <TodoSearch />

      <span onClick={onHideComplete}>
        Tareas completadas
        {
          hiden
            ? <FontAwesomeIcon icon={faEyeSlash} className='icon' />
            : <FontAwesomeIcon icon={faEye} className='icon' />
        }
      </span>
    </div>
  )
}
