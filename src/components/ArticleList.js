import React, {Component, PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static defaultProps = {
        articles: []
    }

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const {articles} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.props.openArticleId == article.id}
                         onClick={this.props.accordion(article.id)}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }

    // toggleOpenArticle = id => ev => {
    //     const openedArticleId = this.state.openArticleId === id ? null : id
    //     this.setState({
    //         openArticleId: openedArticleId
    //     })
    // }
}

export default accordion(ArticleList)
