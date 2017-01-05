import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class ArticlesSelect extends Component {
    static propTypes = {
        articles: PropTypes.array
    };


    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id,
            clearableValue: true
        }))
        return (
            <div>
                <Select options={options} value={this.props.selected} onChange={this.handleChange} multi={false}/>
            </div>
        )
    }

    handleChange = (selected) => {
      this.props.filterArticles(selected)
      if (selected) this.props.filteredArticles(selected.label)
      else this.props.showAllArticles()
    }
}

export default ArticlesSelect
