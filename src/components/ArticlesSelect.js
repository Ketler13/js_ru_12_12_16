import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class ArticlesSelect extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    // state = {
    //     selected: null
    // }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={this.props.selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => {
      const selectedLabels = selected.map(sel => sel.label)
      this.props.filterBySelect(selectedLabels)
      this.props.selectValues(selected)
      //console.log(selectedLabels)
    }

    // handleChange = selected => this.setState({
    //     selected
    // })
}

export default ArticlesSelect
