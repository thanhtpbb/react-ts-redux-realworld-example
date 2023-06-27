import { useEffect } from 'react'
import HomeArticlesList from './components/HomeArticlesList'
import TagList from './components/TagList'

const Home = () => {
  useEffect(() => {
    document.title = 'Home — Conduit'
  }, [])

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <HomeArticlesList />

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <TagList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
