import React from 'react'
import Input from '@material-ui/core/Input';

import styles from './search.module.css'

const Search = ({ searchPhrase, setSearchPhrase }) => (
  <Input
    className={styles.root}
    type="search"
    placeholder="Search"
    value={searchPhrase}
    onChange={(event) => {
      setSearchPhrase(event.target.value)
    }}
  />
)

export default Search
