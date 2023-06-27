import { articleActions } from '@/actions/article'
import PageLoader from '@/components/PageLoader'
import { IArticle } from '@/types/models/IArticle'
import { ArticleType } from '@/types/others'
import { useEffect, useState } from 'react'
import ArticlePreviewItem from '../../../components/ArticlePreviewItem'
import { useParams } from 'react-router-dom'

interface ArticlesListProps {
  articlesType: ArticleType
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articlesType }) => {
  const { username } = useParams()

  const [articles, setArticles] = useState<IArticle[]>([])
  const [isFetchingArticles, setIsFetchingArticles] = useState<boolean>(false)

  const fetchArticlesList = () => {
    const onSuccess = (articles: IArticle[]) => setArticles(articles)
    const onFinally = () => setIsFetchingArticles(false)

    switch (articlesType) {
      case ArticleType.GLOBAL:
        articleActions.getGlobalArticles({ onSuccess, onFinally })
        break
      case ArticleType.FEED:
        articleActions.getFollowedUsersArticles({ onSuccess, onFinally })
        break
      case ArticleType.FAVORITED:
        if (!username) break
        articleActions.getFavoritedArticles(username, { onSuccess, onFinally })
        break
      case ArticleType.SELF:
        if (!username) break
        articleActions.getSelfArticles(username, { onSuccess, onFinally })
        break
      default:
        setIsFetchingArticles(false)
    }
  }

  useEffect(() => {
    setIsFetchingArticles(true)
    fetchArticlesList()
  }, [articlesType])

  if (isFetchingArticles) {
    return (
      <div className="article-preview">
        <PageLoader />
      </div>
    )
  }

  if (articles.length === 0) {
    return <div className="article-preview">No article found!</div>
  }

  return (
    <>
      {articles.map((article, idx) => (
        <ArticlePreviewItem key={`article-${idx}-${article.slug}`} article={article} />
      ))}
      <nav>
        <ul className="pagination">
          <li className="page-item ng-scope active">
            <a className="page-link ng-binding" href="">
              1
            </a>
          </li>
          <li className="page-item ng-scope">
            <a className="page-link ng-binding" href="">
              2
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default ArticlesList
