import { useLayoutEffect } from 'react'

const RegisterForm = () => {
  useLayoutEffect(() => {
    document.title = 'Register - Conduit'
  }, [])

  return (
    <>
      <ul className="error-messages">
        <li>That email is already taken</li>
      </ul>

      <form>
        <fieldset className="form-group">
          <input className="form-control form-control-lg" type="text" placeholder="Your Name" />
        </fieldset>
        <fieldset className="form-group">
          <input className="form-control form-control-lg" type="text" placeholder="Email" />
        </fieldset>
        <fieldset className="form-group">
          <input className="form-control form-control-lg" type="password" placeholder="Password" />
        </fieldset>
        <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
      </form>
    </>
  )
}

export default RegisterForm
