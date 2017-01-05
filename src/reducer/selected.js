import { articles } from '../fixtures'
import { FILTER_ARTICLES } from '../constants'

const initialState = {
  selected: null
}

export default (filterState = initialState, action) => {
  const { type, payload } = action
  console.log(action)

  switch (type) {
    case FILTER_ARTICLES:
      return {
        ...filterState,
        selected: payload.selected
      }
  }

  return filterState
}
