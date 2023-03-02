import { useContext, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './TodoSearch.less'
import { TodoContext } from '../../Context'


export default function TodoSearch() {

  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext)

  return (
    <section className='search'>
      <input
        type="text"
        value={searchValue}
        placeholder='Pasear el perro'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} className='icon' />
    </section>
  )
}
