import React from 'react'
import { Redirect } from 'react-router-dom'
import {
  compose,
  withProps,
  branch,
  renderComponent,
} from 'recompose'

import withUnstated from 'shared/withUnstated'
import todosState from 'state/todos'

import PreviewTodoItem from './PreviewTodoItem'

export default compose(
  withUnstated([{
    state: todosState,
    fields: {
      remove: 'remove',
      select: 'select',
      items: 'state.items',
    }
  }]),
  withProps(
    ({
      items,
      match: { params: { id } }
    }) => ({
      item: items.find((item) => item.id === id)
    })
  ),
  branch(({ item }) => !item, renderComponent(() => <Redirect to="/create" />))
)(
  PreviewTodoItem
)
