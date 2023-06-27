import { articleActions } from '@/actions/article'
import PageLoader from '@/components/PageLoader'
import { IArticle } from '@/types/models/IArticle'
import { ArticleType } from '@/types/others'
import { useEffect, useState } from 'react'
import ArticlePreviewItem from '../../../components/ArticlePreviewItem'

interface ArticlesListProps {
  articlesType: ArticleType
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articlesType }) => {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [isFetchingArticles, setIsFetchingArticles] = useState<boolean>(false)

  useEffect(() => {
    setIsFetchingArticles(true)

    const onSuccess = (articles: IArticle[]) => setArticles(articles)
    const onFinally = () => setIsFetchingArticles(false)

    if (articlesType === ArticleType.GLOBAL) {
      articleActions.getGlobalArticles({ onSuccess, onFinally })
    } else {
      articleActions.getFollowedUsersArticles({ onSuccess, onFinally })
    }
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
        <ArticlePreviewItem key={`global-article-${idx}`} article={article} />
      ))}
    </>
  )
}

export default ArticlesList
