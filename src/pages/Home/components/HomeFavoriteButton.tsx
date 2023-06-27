import { favoritesAction } from '@/actions/favorites'
import React, { useState } from 'react'

interface HomeFavoriteButtonProps {
  originalFavoritesCount: number
  originalFavorited: boolean
  slug: string
}

const HomeFavoriteButton: React.FC<HomeFavoriteButtonProps> = ({ slug, originalFavoritesCount, originalFavorited }) => {
  const [favoritesCount, setFavoritesCount] = useState<number>(originalFavoritesCount)
  const [favorited, setFavorited] = useState<boolean>(originalFavorited)

  const handleFavoriteButtonClick = () => {
    console.log(originalFavorited)
    if (favorited) {
      favoritesAction.favoriteArticle(slug, {
        onSuccess: () => {
          setFavorited(prev => !prev)
          setFavoritesCount(prev => prev - 1)
        },
      })
      return
    }
    favoritesAction.unfavoriteArticle(slug, {
      onSuccess: () => {
        setFavorited(prev => !prev)
        setFavoritesCount(prev => prev + 1)
      },
    })
  }

  return (
    <button
      onClick={handleFavoriteButtonClick}
      className={`btn ${favorited ? 'btn-primary' : 'btn-outline-primary'} btn-sm pull-xs-right`}
    >
      <i className="ion-heart"></i> {favoritesCount}
    </button>
  )
}

export default HomeFavoriteButton
