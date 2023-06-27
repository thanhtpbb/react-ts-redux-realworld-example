import { ROUTER } from '@/configs/router'
import { IArticle } from '@/types/models/IArticle'
import { formatDate } from '@/utils/helper'
import React from 'react'
import HomeFavoriteButton from './HomeFavoriteButton'

interface ArticleItemProps {
  article: IArticle
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const profilePageUrl = `${ROUTER.PROFILE_BASE}/${article.author.username}`

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={profilePageUrl}>
          <img src={article.author.image} />
        </a>
        <div className="info">
          <a href={profilePageUrl} className="author">
            {article.author.username}
          </a>
          <span className="date">{formatDate(article.createdAt)}</span>
        </div>
        <HomeFavoriteButton
          slug={article.slug}
          originalFavorited={article.favorited}
          originalFavoritesCount={article.favoritesCount}
        />
      </div>
      <a href={`${ROUTER.ARTICLE_BASE}/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </a>
    </div>
  )
}

export default ArticleItem
