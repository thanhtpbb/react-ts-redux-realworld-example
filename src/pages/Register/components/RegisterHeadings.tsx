import { ROUTER } from '@/configs/router'

const RegisterHeadings = () => {
  return (
    <>
      <h1 className="text-xs-center">Sign up</h1>
      <p className="text-xs-center">
        <a href={ROUTER.LOGIN}>Need an account?</a>
      </p>
    </>
  )
}

export default RegisterHeadings
