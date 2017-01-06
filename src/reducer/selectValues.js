import { articles } from '../fixtures'
import { SELECT_VALUES } from '../constants'

export default (selectState = {selected: null}, action) => {
  const { type, payload } = action
  //console.log(selectState)

  switch (type) {
    case SELECT_VALUES:
    //console.log(payload.selected)
      return {
        ...selectState,
        selected: payload.selected
      }

    default:
      return selectState

  }
}
