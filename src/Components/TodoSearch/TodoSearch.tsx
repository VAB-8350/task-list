import { useContext, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './TodoSearch.less'

interface props {
  searchValue: string
  setSearchValue: (text: string) => void
}

export default function TodoSearch({searchValue, setSearchValue}: props) {

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
