import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import PaginationForm from './PaginationForm'
import {loadAllComments} from '../AC'
import { mapToArray } from '../helpers'

class CommentPaginator extends Component {
    static PropTypes = {

    }

    state = {
        commentsPerPage: this.props.commentsPerPage,
        currentPage: this.props.currentPage,
        offset: this.props.offset
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
        //this.setState({offset: this.state.commentsPerPage * this.state.currentPage})
        if (ev.target.className === 'next') {
            console.log(this.state)
            this.setState({
                currentPage: this.state.currentPage + 1,
                offset: this.state.offset + this.state.commentsPerPage
            })
            console.log(this.state)
        } else if (ev.target.className === 'prev') {
            console.log(this.state)
            this.setState({
                currentPage: this.state.currentPage - 1,
                offset: this.state.offset - this.state.commentsPerPage
            })
            console.log(this.state)
        }
        const { commentsPerPage, offset, currentPage } = this.state
        console.log(commentsPerPage, currentPage)
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { commentsPerPage, offset, currentPage } = this.state
        console.log(commentsPerPage)
        this.props.loadAllComments(commentsPerPage, offset, currentPage)
    }

    render() {
        const {comments} = this.props
        const commentItems = comments.map(comment =>
            <li key = {comment.id}>{comment.id}<Comment comment = {comment} /></li>
        )

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
            <ul>{commentItems}</ul>
            </div>
        )
        const { commentsPerPage, offset, currentPage }  = this.props
        //console.log(commentsPerPage, offset, currentPage)
        // return (
        //     <div>
        //         <p>Comments per page:</p>
        //         <input type="number" value={this.state.commentsPerPage}
        //         onChange = {this.handleChange('commentsPerPage')}/>
        //         <input type="number"  value={this.state.offset}
        //         onChange = {this.handleChange('offset')}/>
        //         <p>Current page:</p>
        //         <button className='prev' onClick={this.handleClick}>&larr;</button>
        //         <input type="number" value={this.state.currentPage}
        //         onChange = {this.handleChange('currentPage')}/>
        //         <button className='next' onClick={this.handleClick}>&rarr;</button>
        //         <button onClick={this.handleSubmit}>Load comments</button>
        //         <ul>{commentItems}</ul>
        //     </div>
        // )
    }
}

export default connect(store => {
    return {
        comments: mapToArray(store.pagination.entities),
        commentsPerPage: store.pagination.commentsPerPage,
        offset: store.pagination.offset,
        currentPage: store.pagination.currentPage
    }
}, {loadAllComments})(CommentPaginator)
