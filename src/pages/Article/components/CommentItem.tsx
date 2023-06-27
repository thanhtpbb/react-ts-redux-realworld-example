import { ROUTER } from '@/configs/router'
import { IComment } from '@/types/models/IComment'
import React from 'react'

interface CommentItemProps {
  comment: IComment
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const authorURL = `${ROUTER.PROFILE_BASE}/${comment.author.username}`

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <a href={authorURL} className="comment-author">
          <img src={comment.author.image} className="comment-author-img" />
        </a>
        &nbsp;
        <a href={authorURL} className="comment-author">
          {comment.author.username}
        </a>
        <span className="date-posted">{comment.createdAt}</span>
      </div>
    </div>
  )
}

export default CommentItem
