import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

import timeFormat from 'shared/timeFormat'

import styles from './PreviewTodoItem.module.css'

const PreviewTodoItem = ({
  item: { id, title, text, creationTime, doneTime, done } = {},
  select,
  remove,
}) => {

  return (
    <div className={styles.root}>
      <div className={styles.infoContainer}>
        <div className={styles.title}>
          {title}
          {' '}
          (created at {timeFormat(creationTime)}
          {' '}
          {done && `- done at ${timeFormat(doneTime)}`})
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
      <div className={styles.select}>
        <Checkbox
          color="primary"
          onChange={() => select(id)}
          checked={done}
        />
      </div>
      <div className={styles.controlsContainer}>
        <Button onClick={() => remove(id)}>Delete</Button>
      </div>
    </div>
  )
}

export default PreviewTodoItem
