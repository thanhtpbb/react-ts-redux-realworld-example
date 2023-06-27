import { ROUTER } from '@/configs/router'
import { IArticle } from '@/types/models/IArticle'
import { formatDate } from '@/utils/helper'
import React, { useMemo } from 'react'
import ArticleFavoriteButton from './ArticleFavoriteButton'

interface ArticleMetaInfomationProps {
  article: IArticle
  favorited: boolean
  favoritesCount: number
  handleFavoriteButtonClick: () => void
}

const ArticleMetaInfomation: React.FC<ArticleMetaInfomationProps> = ({
  article,
  handleFavoriteButtonClick,
  favorited,
  favoritesCount,
}) => {
  const authorURL = useMemo(() => `${ROUTER.PROFILE_BASE}/${article?.author.username}`, [article])

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
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; Follow {article.author.username}
      </button>
      &nbsp;&nbsp;
      <ArticleFavoriteButton
        handleFavoriteButtonClick={handleFavoriteButtonClick}
        favorited={favorited}
        favoritesCount={favoritesCount}
      />
    </div>
  )
}

export default ArticleMetaInfomation
