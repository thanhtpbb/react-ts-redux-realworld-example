import { profileActions } from '@/actions/profile'
import PageLoader from '@/components/PageLoader'
import { useAuthContext } from '@/hooks/context'
import { IProfile } from '@/types/models/IProfile'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfileArticlesList from './components/ProfileArticlesList'
import ProfileEditButton from './components/ProfileEditButton'
import ProfileFollowButton from './components/ProfileFollowButton'

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
      },
      onFinally: () => setIsFetchingProfile(false),
    })
  }

  useEffect(() => {
    fetchProfileByParam()
  }, [])

  const isSelfProfile = useMemo(() => profile?.username === currentUser?.username, [profile, currentUser])

  if (!profile)
    return isFetchingProfile ? (
      <p style={{ display: 'flex', justifyContent: 'center' }}>Profile not found</p>
    ) : (
      <PageLoader />
    )

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={profile.image} className="user-img" />
              <h4>{profile.username}</h4>
              <p> {profile.bio}</p>
              {isSelfProfile ? <ProfileEditButton /> : <ProfileFollowButton profile={profile} />}
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
            <ProfileArticlesList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
