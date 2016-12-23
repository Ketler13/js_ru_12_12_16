import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filter from './Filter'

class AppContainer extends Component {
    static defaultProps = {
      articles: []
    }
    static propTypes = {
      articles: PropTypes.array.isRequired
    }

    render() {
      return (
          <div>
              <UserForm />
              <Filter articles = {this.props.articles}/>
              <ArticleList articles={this.props.articles}/>
          </div>
      )
    }
}

export default AppContainer
