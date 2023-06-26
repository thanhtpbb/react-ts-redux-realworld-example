import { ROUTER } from '@/configs/router'
import { useAuthContext } from '@/hooks/context'
import { isLoggedin } from '@/utils/storage'
import { memo } from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const {
    state: { currentUser },
  } = useAuthContext()

  const location = useLocation()
  const pathname = location.pathname

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href={ROUTER.HOME}>
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className={`nav-link ${pathname === ROUTER.HOME && 'active'}`} href={ROUTER.HOME}>
              Home
            </a>
          </li>
          {isLoggedin ? (
            <>
              <li className="nav-item">
                <a className={`nav-link ${pathname === ROUTER.EDITOR && 'active'}`} href={ROUTER.EDITOR}>
                  <i className="ion-compose"></i>&nbsp;New Article
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname === ROUTER.SETTINGS && 'active'}`} href={ROUTER.SETTINGS}>
                  <i className="ion-gear-a"></i>&nbsp;Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`${ROUTER.PROFILE_BASE}/${currentUser?.username}`}>
                  <img src={currentUser?.image} style={{ width: '26px', height: '26px', marginRight: '5px' }} />
                  {currentUser?.username}
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href={ROUTER.LOGIN}>
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTER.REGISTER}>
                  Sign up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default memo(Header)
