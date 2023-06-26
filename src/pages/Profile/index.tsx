import { profileActions } from '@/actions/profile'
import PageLoader from '@/components/PageLoader'
import { useAuthContext } from '@/hooks/context'
import { IProfile } from '@/types/models/IProfile'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const [profile, setProfile] = useState<IProfile>()
  const [isFetchingProfile, setIsFetchingProfile] = useState<boolean>(false)

  const { username } = useParams()

  const {
    state: { currentUser },
  } = useAuthContext()

  const fetchProfileByParam = () => {
    if (!username) return
    setIsFetchingProfile(true)
    profileActions.getProfile(username, {
      onSuccess: (fetchedProfile: IProfile) => {
        setProfile(fetchedProfile)
        document.title = `@${fetchedProfile.username} - Conduit`
        setIsFetchingProfile(false)
      },
    })
  }

  useEffect(() => {
    fetchProfileByParam()
  }, [])

  const isSelfProfile = useMemo(() => profile?.username === currentUser?.username, [profile, currentUser])

  if (!profile)
    return isFetchingProfile ? <p style={{ display: 'flex', justifyContent: 'center' }}></p> : <PageLoader />

  const handleFollowButtonClick = () => {
    if (profile.following) {
      profileActions.unfollowUser(profile.username)
      return
    }
    profileActions.followUser(profile.username)
  }

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" />
              <h4>{profile.username}</h4>
              <p> {profile.bio}</p>
              <button onClick={handleFollowButtonClick} className="btn btn-sm btn-outline-secondary action-btn">
                {isSelfProfile ? (
                  <>
                    <i className="ion-gear-a"></i>
                    &nbsp; Edit Profile Settings
                  </>
                ) : (
                  <>
                    <i className="ion-plus-round"></i>
                    &nbsp; {profile.following ? 'Unfollow' : 'Follow'} {profile.username}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    My Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a href="" className="author">
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a href="" className="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  <a href="" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="" className="preview-link">
                <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
