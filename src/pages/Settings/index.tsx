import { ROUTER } from '@/configs/router'
import { useAuthContext } from '@/hooks/context'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const {
    state: { currentUser },
  } = useAuthContext()

  const navigate = useNavigate()

  const handleLogoutButtonClick = () => {
    localStorage.removeItem('token')
    navigate(ROUTER.HOME, { replace: true })
    window.location.reload()
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    defaultValue={currentUser?.image}
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    defaultValue={currentUser?.username}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    defaultValue={currentUser?.bio}
                    className="form-control form-control-lg"
                    rows={8}
                    placeholder="Short bio about you"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    defaultValue={currentUser?.email}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" onClick={handleLogoutButtonClick}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
