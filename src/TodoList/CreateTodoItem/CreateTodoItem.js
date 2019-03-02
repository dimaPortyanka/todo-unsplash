import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


import styles from './CreateTodoItem.module.css'

const CreateTodoItem = ({
  title,
  text,
  setTitle,
  setText,
  add,
}) => (
  <div className={styles.root}>
    <h2>Create todo item</h2>
    <div>
      <TextField
        className={styles.field}
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        className={styles.field}
        rowsMax="4"
        multiline
        label="Text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
    <br/>
    <Button
      disabled={!title || !text}
      variant="contained"
      color="primary"
      onClick={add}
    >
      Save
    </Button>
  </div>
)

export default CreateTodoItem
