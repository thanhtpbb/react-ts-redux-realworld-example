import { profileActions } from '@/actions/profile'
import { IProfile } from '@/types/models/IProfile'
import React from 'react'

interface ProfileFollowButtonProps {
  profile: IProfile
}

const ProfileFollowButton: React.FC<ProfileFollowButtonProps> = ({ profile }) => {
  const handleFollowButtonClick = () => {
    if (profile.following) {
      profileActions.unfollowUser(profile.username)
      return
    }
    profileActions.followUser(profile.username)
  }

  return (
    <button
      onClick={handleFollowButtonClick}
      className={`btn btn-sm ${profile.following ? `btn-secondary` : `btn-outline-secondary`} action-btn`}
    >
      <i className="ion-plus-round"></i>
      &nbsp; {profile.following ? 'Unfollow' : 'Follow'} {profile.username}
    </button>
  )
}

export default ProfileFollowButton
