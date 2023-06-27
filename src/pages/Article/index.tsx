import PageLoader from '@/components/PageLoader'
import { useAppDispatch } from '@/hooks/redux'
import { articleActions } from '@/redux/reducers/article/article.action'
import { IArticle } from '@/types/models/IArticle'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArticleCommentsSection from './components/ArticleCommentsSection'
import ArticleMetaInfomation from './components/ArticleMetaInfomation'
import ArticleTagsList from './components/ArticleTagsList'

const Article = () => {
  const [article, setArticle] = useState<IArticle>()
  const [isFetchingArticle, setIsFetchingArticle] = useState<boolean>(false)
  const { slug } = useParams()
  const dispatch = useAppDispatch()

  const fetchArticleItem = () => {
    setIsFetchingArticle(true)
    if (!slug) return
    dispatch(
      articleActions.getArticle(slug, {
        onSuccess: (result: IArticle) => {
          setArticle(result)
          document.title = `${result.title} - Conduit`
          setIsFetchingArticle(false)
        },
        onError: () => setIsFetchingArticle(false),
      })
    )
  }

  useEffect(() => {
    fetchArticleItem()
  }, [])

  if (!article) return isFetchingArticle ? <PageLoader /> : <div>Article not found</div>

  return (
    <div className="article-page">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleMetaInfomation article={article} />
        </div>
      </div>
      {/* Content */}
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <div>
              <div ng-bind-html="::$ctrl.article.body" className="ng-binding">
                <p>{article.body}</p>
              </div>
            </div>
            <ArticleTagsList tags={article.tagList} />
          </div>
        </div>
        <hr />
        <div className="article-actions">
          <ArticleMetaInfomation article={article} />
        </div>
        <ArticleCommentsSection slug={article.slug} />
      </div>
    </div>
  )
}

export default Article
