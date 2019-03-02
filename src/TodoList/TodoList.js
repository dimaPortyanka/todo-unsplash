import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Search from './Search'
import List from './List'
import CreateTodoItem from './CreateTodoItem'
import PreviewTodoItem from './PreviewTodoItem'

import styles from './TodoList.module.css'

const TodoList = () => {
  return (
    <div className={styles.root}>
      <div className={styles.listOfTasks}>
        <div className={styles.top}>
          <Search />
        </div>
        <div className={styles.listContainer}>
          <List />
        </div>
      </div>
      <div className={styles.taskContainer}>
        <div className={styles.createButton}>
          <Fab color="primary" aria-label="Add">
            <NavLink
              to="/create"
              className={styles.createLink}
              activeClassName={styles.createLinkActive}
            >
              <AddIcon />
            </NavLink>
          </Fab>
        </div>
        <div className={styles.formContainer}>
          <Switch>
            <Route path="/create" component={CreateTodoItem} />
            <Route path="/edit/:id" component={PreviewTodoItem} />
            <Redirect to="/create" />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default TodoList
