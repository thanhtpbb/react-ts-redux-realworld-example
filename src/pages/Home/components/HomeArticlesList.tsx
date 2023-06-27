import { ArticleType } from '@/types/others'
import { useState } from 'react'
import ArticleNavMenuItem from './ArticleNavMenuItem'
import ArticlesList from './ArticlesList'

const HomeArticlesList = () => {
  const [articlesType, setArticlesType] = useState<ArticleType>(ArticleType.FEED)

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <ArticleNavMenuItem articlesType={articlesType} setArticlesType={setArticlesType} type={ArticleType.FEED}>
            Your Feed
          </ArticleNavMenuItem>
          <ArticleNavMenuItem articlesType={articlesType} setArticlesType={setArticlesType} type={ArticleType.GLOBAL}>
            Global Feed
          </ArticleNavMenuItem>
        </ul>
      </div>
      <ArticlesList articlesType={articlesType} />
    </div>
  )
}

export default HomeArticlesList
