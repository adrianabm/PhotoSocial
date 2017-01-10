export const ADD_LIKE = 'ADD_LIKE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

// Add Like
export function addLike(index) {
  return {
    type: 'ADD_LIKE',
    index
  }
}

// Add Comments
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Delete Comment
export function deleteComment(postId, i) {
  return {
    type: 'DELETE_COMMENT',
    i
  }
}
