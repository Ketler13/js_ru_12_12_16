import { articles } from '../fixtures'
import { SELECT_VALUES, FILTER_BY_DATE } from '../constants'

export default (selectState = {selected: null, from: null, to: null}, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_VALUES:
      return {
        ...selectState,
        selected: payload.selected
      }

      case FILTER_BY_DATE:
        const { from, to } = payload
        return {
          ...selectState,
          from,
          to
        }

    default:
      return selectState

  }
}
