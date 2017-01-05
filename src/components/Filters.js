import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import { connect } from 'react-redux'
import { filterArticles, filteredArticles, showAllArticles } from '../AC'

class Filters extends Component {
    static propTypes = {
        //articles: PropTypes.array.isRequired
    }

    render() {
      const { articles, selected, filterArticles, filteredArticles, showAllArticles } = this.props
      return (
            <div>
                <ArticlesSelect
                  articles = { articles }
                  selected = { selected }
                  filterArticles = { filterArticles }
                  filteredArticles = { filteredArticles }
                  showAllArticles = { showAllArticles }
                  />
                <DateRange/>
            </div>
        )
    }
}

export default connect((state) => {
  return {
    articles: state.articles,
    selected: state.selected
  }
}, {filterArticles, filteredArticles, showAllArticles})(Filters)
