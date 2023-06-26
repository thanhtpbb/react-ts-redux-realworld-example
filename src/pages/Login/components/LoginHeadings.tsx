import { ROUTER } from '@/configs/router'
import { memo } from 'react'

const LoginHeadings = () => {
  return (
    <>
      <h1 className="text-xs-center">Sign in</h1>
      <p className="text-xs-center">
        <a href={ROUTER.REGISTER}>Have an account?</a>
      </p>
    </>
  )
}

export default memo(LoginHeadings)
