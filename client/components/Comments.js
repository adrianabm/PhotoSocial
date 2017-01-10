import React, { Component } from 'react'

class Comments extends Component {
  renderComment(comment, i) {
    return (
      <div className="comment" key={ i }>
        <p>
          <strong>{ comment.user }</strong>
            { comment.text }
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }

  render() {
    return(
      <div className="comment">
        { this.props.postComments.map(this.renderComment) }
      </div>
    )
  }
}

export default Comments
