import React from 'react'

import Item from './Item'

import styles from './List.module.css'

const List = ({ items, searchPhrase }) => {
  const itemsSorteByTime = items.map((item) => {
    let time = item.creationTime

    if (item.done) {
      time = item.doneTime
    }

    return {
      ...item,
      time,
    };
  }).sort((a, b) => (b.time - a.time))
  const planned = itemsSorteByTime.filter(({ done }) => !done)
  const finished = itemsSorteByTime.filter(({ done }) => done)

  return (
    <div className={styles.root}>
      <h4>Planned ({planned.length})</h4>
      {planned.filter(({ title, text }) => (
        title.indexOf(searchPhrase) !== -1 || text.indexOf(searchPhrase) !== -1
      )).map((props, index) => (
        <Item
          key={props.id}
          {...props}
          num={index+1}
        />
      ))}
      <h4>Done ({finished.length})</h4>
      {finished.filter(({ title, text }) => (
        title.indexOf(searchPhrase) !== -1 || text.indexOf(searchPhrase) !== -1
      )).map((props, index) => (
        <Item
          key={props.id}
          {...props}
          num={index+1}
        />
      ))}
    </div>
  )
}

export default List
