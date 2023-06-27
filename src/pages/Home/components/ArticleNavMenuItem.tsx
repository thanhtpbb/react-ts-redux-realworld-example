import { ArticleType } from '@/types/others'
import React, { ReactNode } from 'react'

interface ArticleNavMenuItemProps {
  type: ArticleType
  children: ReactNode
  articlesType: ArticleType
  setArticlesType: React.Dispatch<React.SetStateAction<ArticleType>>
}

const ArticleNavMenuItem: React.FC<ArticleNavMenuItemProps> = ({ children, articlesType, setArticlesType, type }) => (
  <li className="nav-item">
    <div onClick={() => setArticlesType(type)} className={`nav-link ${articlesType === type && 'active'}`}>
      {children}
    </div>
  </li>
)

export default ArticleNavMenuItem
