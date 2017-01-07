import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import { connect } from 'react-redux'
import { selectValues, filterBySelect, filterByDate } from '../AC'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <ArticlesSelect
                articles = {this.props.articles}
                selected = {this.props.selected}
                selectValues = {this.props.selectValues}
                filterBySelect = {this.props.filterBySelect}
                />
                <DateRange filterByDate = {this.props.filterByDate}/>
            </div>
        )
    }
}

export default connect((state) => {
  return {
    articles: state.articles,
    selected: state.selectValues.selected
  }
}, { selectValues, filterBySelect, filterByDate })(Filters)
