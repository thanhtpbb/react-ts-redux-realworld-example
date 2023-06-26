import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { articleActions } from '@/redux/reducers/article/article.action'
import { useEffect } from 'react'
import ArticleItem from './ArticleItem'

const FollowedUsersArticlesList = () => {
  const dispatch = useAppDispatch()

  const { articles, isFetching: isFetchingArticles } = useAppSelector(state => state.article)

  useEffect(() => {
    dispatch(articleActions.getFollowedUsersArticles())
  }, [])

  return isFetchingArticles ? (
    <div className="article-preview">Loading articles...</div>
  ) : (
    <>
      {articles.map((article, idx) => (
        <ArticleItem key={`global-article-${idx}`} article={article} />
      ))}
    </>
  )
}

export default FollowedUsersArticlesList
