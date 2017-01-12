import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <ArticlesSelect articles/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters
