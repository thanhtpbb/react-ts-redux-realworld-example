import { Reducer } from 'redux'
import { ArticleAction, ArticleActionType, ArticleState } from './article.type'

const initialState: ArticleState = {
  isFetching: false,
  articles: [],
}

const articleReducer: Reducer<ArticleState, ArticleAction> = (state = initialState, action) => {
  switch (action.type) {
    case ArticleActionType.ARTICLE_ACTION_PENDING:
      return { ...state, isFetching: true }
    case ArticleActionType.ARTICLE_ACTION_FAILURE:
      return { ...state, isFetching: false }
    case ArticleActionType.GET_FOLLOWED_USERS_ARTICLES:
      return { ...state, isFetching: false }
    case ArticleActionType.GET_GLOBAL_ARTICLES_SUCCESS:
      return { ...state, isFetching: false, articles: action.payload.articles }
    case ArticleActionType.CREATE_ARTICLE_SUCCESS:
      return { ...state, isFetching: false }
    case ArticleActionType.GET_ARTICLE_SUCCESS:
      return { ...state, isFetching: false }
    case ArticleActionType.UPDATE_ARTICLE_SUCCESS:
      return { ...state, isFetching: false }
    case ArticleActionType.DELETE_ARTICLE_SUCCESS:
      return { ...state, isFetching: false }
    default:
      return state
  }
}

export default articleReducer
