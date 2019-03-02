import React from 'react'
import { NavLink } from 'react-router-dom'

import timeFormat from 'shared/timeFormat'

import styles from './item.module.css'

const Item = ({ num, title, text, id, done, time }) => (
  <NavLink
    key={id}
    to={`/edit/${id}`}
    className={styles.item}
    activeClassName={styles.active}
  >
    <div className={styles.number}>
      {num})
    </div>
    <div>
      <div>
        {title}
      </div>
      <div>
        {timeFormat(time)}
      </div>
    </div>
  </NavLink>
)

export default Item
