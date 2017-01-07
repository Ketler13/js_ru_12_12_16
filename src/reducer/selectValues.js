import { articles } from '../fixtures'
import { SELECT_VALUES } from '../constants'

export default (selectState = {selected: null}, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_VALUES:
      return {
        ...selectState,
        selected: payload.selected
      }

    default:
      return selectState

  }
}
