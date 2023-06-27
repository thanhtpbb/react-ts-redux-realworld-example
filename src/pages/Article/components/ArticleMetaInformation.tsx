import { ROUTER } from '@/configs/router'
import { useAuthContext } from '@/hooks/context'
import { IArticle } from '@/types/models/IArticle'
import { formatDate } from '@/utils/helper'
import React, { useMemo } from 'react'
import ArticleFavoriteButton from './ArticleFavoriteButton'
import ArticleFollowButton from './ArticleFollowButton'
import SelfArticleFunctions from './SelfArticleFunctions'

interface ArticleMetaInformationProps {
  article: IArticle
  favorited: boolean
  favoritesCount: number
  handleFavoriteButtonClick: () => void
}

const ArticleMetaInformation: React.FC<ArticleMetaInformationProps> = ({
  article,
  handleFavoriteButtonClick,
  favorited,
  favoritesCount,
}) => {
  const authorURL = useMemo(() => `${ROUTER.PROFILE_BASE}/${article?.author.username}`, [article])

  const {
    state: { currentUser },
  } = useAuthContext()

  const currentUserName = currentUser?.username
  const authorName = article.author.username
  const isSelfArticle = useMemo(() => currentUserName === authorName, [currentUserName, authorName])

  return (
    <div className="article-meta">
      <a href={authorURL}>
        <img src={article.author.image} />
      </a>
      <div className="info">
        <a href={authorURL} className="author">
          {article.author.username}
        </a>
        <span className="date">{formatDate(article.createdAt)}</span>
      </div>
      {isSelfArticle ? (
        <SelfArticleFunctions slug={article.slug} />
      ) : (
        <>
          <ArticleFollowButton author={article.author} />
          &nbsp;&nbsp;
          <ArticleFavoriteButton
            handleFavoriteButtonClick={handleFavoriteButtonClick}
            favorited={favorited}
            favoritesCount={favoritesCount}
          />
        </>
      )}
    </div>
  )
}

export default ArticleMetaInformation
