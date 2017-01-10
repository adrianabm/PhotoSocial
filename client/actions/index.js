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
