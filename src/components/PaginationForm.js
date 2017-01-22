import React, { Component, PropTypes } from 'react'

class PaginationForm extends Component {
    static propTypes = {

    }

    render() {
        // const {comments} = this.props
        // const commentItems = comments.map(comment =>
        //     <li key = {comment.id}>{comment.id}<Comment comment = {comment} /></li>
        // )

        return (
            <div>
                <p>Comments per page:</p>
                <input type="number" value={this.props.commentsPerPage}
                onChange = {this.props.handleChange('commentsPerPage')}/>
                <input type="number"  value={this.props.offset}
                onChange = {this.props.handleChange('offset')}/>
                <p>Current page:</p>
                <button className='prev' onClick={this.props.handleClick}>&larr;</button>
                <input type="number" disabled  value={this.props.currentPage}
                onChange = {this.props.handleChange('currentPage')}/>
                <button className='next' onClick={this.props.handleClick}>&rarr;</button>
                <button onClick={this.props.handleSubmit}>Load comments</button>
            </div>
        )
    }
}

export default PaginationForm
