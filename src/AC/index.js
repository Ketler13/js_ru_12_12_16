import { INCREMENT, DELETE_ARTICLE, SELECT_VALUES, FILTER_BY_SELECT } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function selectValues(selected) {
  return {
    type: SELECT_VALUES,
    payload: {
      selected
    }
  }
}

export function filterBySelect(selectedLabels) {
  return {
    type: FILTER_BY_SELECT,
    payload: {
      selectedLabels
    }
  }
}

export function showAll() {
  return {
    type: "SHOW_ALL"
  }
}
