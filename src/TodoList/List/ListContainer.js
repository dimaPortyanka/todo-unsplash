import withUnstated from 'shared/withUnstated'
import todosState from 'state/todos'
import searchState from 'state/search'

import List from './List'

export default withUnstated([{
  state: todosState,
  fields: {
    items: 'state.items'
  },
}, {
  state: searchState,
  fields: {
    searchPhrase: 'state.searchPhrase',
  },
}])(
  List
)
