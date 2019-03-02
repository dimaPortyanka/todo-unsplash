import withUnstated from 'shared/withUnstated'

import searchState from 'state/search'

import Search from './Search'

export default withUnstated([{
  state: searchState,
  fields: {
    searchPhrase: 'state.searchPhrase',
    setSearchPhrase: 'setSearchPhrase',
  },
}])(Search)
