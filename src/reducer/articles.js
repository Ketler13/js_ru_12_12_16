import { articles } from '../fixtures'
import { DELETE_ARTICLE, FILTER_BY_SELECT } from '../constants'

export default (articlesState = articles, action) => {
    const { type, payload } = action
    //console.log(articlesState)

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        // case FILTER_BY_SELECT:
        //     let filteredArticles = []
        //     payload.selectedLabels.forEach(label => {
        //       articles.forEach(article => {
        //         if (article.title === label) filteredArticles.push(article)
        //       })
        //     })
            //console.log(filteredArticles)
            // if (!payload.selectedLabels) return articlesState
            // return filteredArticles
    }
    return articlesState
}
