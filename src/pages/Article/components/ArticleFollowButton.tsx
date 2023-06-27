import { profileActions } from '@/actions/profile'
import { IProfile } from '@/types/models/IProfile'
import React from 'react'

interface ArticleFollowButtonProps {
  author: IProfile
}
const ArticleFollowButton: React.FC<ArticleFollowButtonProps> = ({ author }) => {
  const handleFollowButtonClick = () => {
    if (author.following) {
      profileActions.unfollowUser(author.username)
      return
    }
    profileActions.followUser(author.username)
  }

  return (
    <button
      onClick={handleFollowButtonClick}
      className={`btn btn-sm ${author.following ? `btn-secondary` : `btn-outline-secondary`} action-btn`}
    >
      <i className="ion-plus-round"></i>
      &nbsp; {author.following ? 'Unfollow' : 'Follow'} {author.username}
    </button>
  )
}

export default ArticleFollowButton
