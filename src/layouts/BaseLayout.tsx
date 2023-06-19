import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  // let user = 'test'

  // if (!user) {
  //   return <Navigate to={ROUTER.HOME} replace />
  // }
  console.log(window.location)

  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default BaseLayout
