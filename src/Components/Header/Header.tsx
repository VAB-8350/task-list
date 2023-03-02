import TodoSearch from "../TodoSearch/TodoSearch"
import { faChevronLeft, faSun, faMoon, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.less'
import { ReactNode } from "react"

interface props {
  onHideComplete: () => void
  hiden: boolean
  onDarkMode: () => void
  darkMode: boolean
  children: ReactNode
}

export default function Header({
  onHideComplete,
  hiden,
  onDarkMode,
  darkMode,
  children
}: props) {
 
  return (
    <header className="header">

      <section>
        <h1>
          {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
          Mis Tareas
        </h1>

        <button onClick={onDarkMode}>
          <FontAwesomeIcon className='header-mode' icon={darkMode ? faMoon : faSun} />
        </button>
      </section>

      {children}

      <span onClick={onHideComplete}>
        Tareas completadas
        {
          hiden
            ? <FontAwesomeIcon icon={faEyeSlash} className='icon' />
            : <FontAwesomeIcon icon={faEye} className='icon' />
        }
      </span>
    </header>
  )
}
