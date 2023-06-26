import { Callback } from '@/types/others/callback'
import { ArticleActionType, ArticleThunkAction } from './article.type'
import { AppDispatch } from '@/redux/store'
import { apiCall } from '@/configs/api'
import { API_URLS } from '@/configs/api/endpoint'

const getFollowedUsersArticles =
  (cb?: Callback): ArticleThunkAction =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: ArticleActionType.ARTICLE_ACTION_PENDING })

    const { response, error } = await apiCall(API_URLS.ARTICLES.GET_FEED_ARTICLES())

    if (!error && response?.status === 200) {
      const result = response.data
      dispatch({
        type: ArticleActionType.GET_FOLLOWED_USERS_ARTICLES,
        payload: result,
      })
      cb?.onSuccess?.(result)
    } else {
      dispatch({ type: ArticleActionType.ARTICLE_ACTION_PENDING })
    }
  }

const getGlobalArticles =
  (cb?: Callback): ArticleThunkAction =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: ArticleActionType.ARTICLE_ACTION_PENDING })

    const { response, error } = await apiCall(API_URLS.ARTICLES.GET_GLOBAL_ARTICLES())

    if (!error && response?.status === 200) {
      const result = response.data
      dispatch({
        type: ArticleActionType.GET_GLOBAL_ARTICLES_SUCCESS,
        payload: result,
      })
      cb?.onSuccess?.(result)
    } else {
      dispatch({ type: ArticleActionType.ARTICLE_ACTION_PENDING })
    }
  }

export const articleActions = { getGlobalArticles, getFollowedUsersArticles }
