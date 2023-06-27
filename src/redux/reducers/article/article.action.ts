import { Callback } from '@/types/others/callback'
import { ArticleActionType, ArticleThunkAction } from './article.type'
import { AppDispatch } from '@/redux/store'
import { apiCall } from '@/configs/api'
import { API_URLS } from '@/configs/api/endpoint'
import { CreateArticlePayload } from '@/configs/api/payload'

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
      dispatch({ type: ArticleActionType.ARTICLE_ACTION_FAILURE })
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
      dispatch({ type: ArticleActionType.ARTICLE_ACTION_FAILURE })
    }
  }

const createArticle =
  (payload: CreateArticlePayload, cb?: Callback): ArticleThunkAction =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: ArticleActionType.ARTICLE_ACTION_PENDING })

    const { response, error } = await apiCall({ ...API_URLS.ARTICLES.POST_ARTICLE(), payload })

    if (!error && response?.status === 200) {
      const result = response.data
      dispatch({
        type: ArticleActionType.CREATE_ARTICLE_SUCCESS,
        payload: result,
      })
      cb?.onSuccess?.(result.article)
    } else {
      dispatch({ type: ArticleActionType.ARTICLE_ACTION_FAILURE })
    }
  }

const getArticle =
  (slug: string, cb?: Callback): ArticleThunkAction =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: ArticleActionType.ARTICLE_ACTION_PENDING })

    const { response, error } = await apiCall({ ...API_URLS.ARTICLES.GET_ARTICLE(slug) })

    if (!error && response?.status === 200) {
      const result = response.data
      dispatch({
        type: ArticleActionType.GET_ARTICLE_SUCCESS,
        payload: result,
      })
      cb?.onSuccess?.(result.article)
    } else {
      dispatch({ type: ArticleActionType.ARTICLE_ACTION_FAILURE })
    }
  }

export const articleActions = { getGlobalArticles, getFollowedUsersArticles, createArticle, getArticle }
