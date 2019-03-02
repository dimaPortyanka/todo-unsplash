import React from 'react'
import { fromRenderProps } from 'recompose'
import { Subscribe } from 'unstated'
import get from 'lodash/get'

const withUnstated = (states) => {

  return fromRenderProps(
    ({ children }) => (
      <Subscribe to={states.map(({ state }) => state )}>{children}</Subscribe>
    ),
    (...props) => (
      props.reduce((prev, state, index) => ({
        ...prev,
        ...Object.entries(states[index].fields).reduce(( prev2, [ name, selector ]) => {
          prev2[name] = get(state, selector)

          return prev2
        }, {})
      }), {})
    )
  )
}

export default withUnstated
