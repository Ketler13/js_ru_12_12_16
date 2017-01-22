import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import PaginationForm from './PaginationForm'
import Loader from './Loader'
import {loadCommentsFromApi, loadCommentsFromStore} from '../AC'
import { mapToArray, arrayFromRange } from '../helpers'

class CommentPaginator extends Component {
    static PropTypes = {

    }

    state = {
        commentsPerPage: this.props.commentsPerPage,
        currentPage: this.props.currentPage,
        offset: this.props.offset,
        idsToLoad: this.props.idsToLoad
    }

    // componentDidMount() {
    //     const { commentsPerPage, offset, currentPage } = this.props
    //     this.props.loadAllComments(commentsPerPage, offset, currentPage)
    // }

    handleChange = field => ev => {
        this.setState({
            [field]: Number(ev.target.value)
        })
    }

    handleClick = ev => {
        if (ev.target.className === 'next') {
            this.setState({
                currentPage: this.state.currentPage + 1,
                offset: this.state.offset + this.state.commentsPerPage
            })
            this.setState({
                idsToLoad: arrayFromRange(this.state.offset, (this.state.commentsPerPage + (this.state.offset - 1)))
            })
        } else if (ev.target.className === 'prev') {
            this.setState({
                currentPage: this.state.currentPage - 1,
                offset: this.state.offset - this.state.commentsPerPage
            })
        }
        const { commentsPerPage, offset, currentPage } = this.state
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { commentsPerPage, offset, currentPage } = this.state
        const { commentState } = this.props
        const idsToLoad = arrayFromRange(this.state.offset, (this.state.commentsPerPage + (this.state.offset - 1)))
        const comments =  mapToArray(commentState.entities)
        let cachedIds = []
        commentState.entities.forEach(entity => cachedIds.push(entity.id))
        const isPageLoaded = idsToLoad.every(id => cachedIds.includes(id))
        if (isPageLoaded) {
            this.props.loadCommentsFromStore(idsToLoad, isPageLoaded)
        } else {
            this.props.loadCommentsFromApi(commentsPerPage, offset, currentPage)
        }
    }

    render() {
        const {comments, loading, isPageLoaded, idsToLoad, offset, commentsPerPage} = this.props
        const idsToLoadFromApi = arrayFromRange(offset, (commentsPerPage + (offset - 1)))
        const commentsFromStore = isPageLoaded ? comments.filter(comment => {
             return idsToLoad.some(id => id === comment.id)
        }) : comments.filter(comment => {
            return idsToLoadFromApi.some(id => id === comment.id)
        })
        const commentItems = commentsFromStore.map(comment =>
            <li key = {comment.id}>{comment.id}<Comment comment = {comment} /></li>
        )
        const loader = loading && <Loader />

        return (
            <div>
                <PaginationForm
                        comments = { this.props.comments }
                        commentsPerPage = { this.state.commentsPerPage }
                        offset = { this.state.offset }
                        currentPage = { this.state.currentPage }
                        handleChange = { this.handleChange }
                        handleClick = { this.handleClick }
                        handleSubmit = { this.handleSubmit }
                />
                { loader }
                <ul>{commentItems}</ul>
            </div>
        )
    }
}

export default connect(store => {
    const { commentsPerPage, offset, currentPage, isPageLoaded, idsToLoad } = store.pagination
    const commentState = store.pagination
    const comments =  mapToArray(store.pagination.entities)


    return {
        commentsPerPage, commentState, offset, currentPage, comments, isPageLoaded, idsToLoad
    }

}, {loadCommentsFromApi, loadCommentsFromStore})(CommentPaginator)
