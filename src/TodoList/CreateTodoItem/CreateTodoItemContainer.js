 import {
  compose,
  withStateHandlers,
  withHandlers,
} from 'recompose'
import { withRouter } from 'react-router'
import withUnstated from 'shared/withUnstated'
import todosState from 'state/todos'


import CreateTodoItem from './CreateTodoItem'

export default compose(
  withRouter,
  withStateHandlers({
    title: '',
    text: '',
  }, {
    clear: () => () => ({ title: '', text: '' }),
    setTitle: () => (title) => ({ title }),
    setText: () => (text) => ({ text }),
  }),
  withUnstated([{
    state: todosState,
    fields: {
      add: 'add'
    }
  }]),
  withHandlers({
    add: ({ add, text, title, clear }) => () => {
      add({ title, text })
      alert('Created task!')
      clear()
    }
  })
)(
  CreateTodoItem
)
