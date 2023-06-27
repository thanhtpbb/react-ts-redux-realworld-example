import { articleActions } from '@/actions/article'
import { ROUTER } from '@/configs/router'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface SelfArticleFunctionsProps {
  slug: string
}

const SelfArticleFunctions: React.FC<SelfArticleFunctionsProps> = ({ slug }) => {
  const navigate = useNavigate()

  const handleDeleteArticleClick = () => {
    articleActions.deleteArticle(slug, {
      onSuccess: () => navigate(ROUTER.HOME),
    })
  }

  return (
    <>
      <a className="btn btn-outline-secondary btn-sm" href={`${ROUTER.EDITOR}/${slug}`}>
        <i className="ion-edit"></i> Edit Article
      </a>
      &nbsp;&nbsp;
      <button onClick={handleDeleteArticleClick} className="btn btn-outline-danger btn-sm">
        <i className="ion-trash-a"></i> Delete Article
      </button>
    </>
  )
}

export default SelfArticleFunctions
