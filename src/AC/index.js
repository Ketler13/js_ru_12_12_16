import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES, FILTERED_ARTICLES } from '../constants'

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

export function filteredArticles(label) {
  return {
    type: FILTERED_ARTICLES,
    payload: {label}
  }
}

export function filterArticles(selected) {
  return {
    type: FILTER_ARTICLES,
    payload: { selected }
  }
}

export function showAllArticles() {
  return {type: 'SHOW_ALL'}
}
