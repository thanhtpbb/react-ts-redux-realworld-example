import { apiCall } from '@/configs/api'
import { API_URLS } from '@/configs/api/endpoint'
import { CreateArticlePayload, UpdateArticlePayload } from '@/configs/api/payload'
import { Callback } from '@/types/others/callback'

const getFollowedUsersArticles = async (cb?: Callback) => {
  const { response, error } = await apiCall(API_URLS.ARTICLES.GET_FEED_ARTICLES())

  if (!error && response?.status === 200) {
    const result = response.data.articles
    cb?.onSuccess?.(result)
  } else {
    cb?.onError?.()
  }
  cb?.onFinally?.()
}

const getGlobalArticles = async (cb?: Callback) => {
  const { response, error } = await apiCall(API_URLS.ARTICLES.GET_GLOBAL_ARTICLES())

  if (!error && response?.status === 200) {
    const result = response.data.articles
    cb?.onSuccess?.(result)
  } else {
    cb?.onError?.()
  }
  cb?.onFinally?.()
}

const createArticle = async (payload: CreateArticlePayload, cb?: Callback) => {
  const { response, error } = await apiCall({ ...API_URLS.ARTICLES.POST_ARTICLE(), payload })

  if (!error && response?.status === 200) {
    const result = response.data
    cb?.onSuccess?.(result.article)
  } else {
    cb?.onError?.()
  }
  cb?.onFinally?.()
}

const updateArticle = async (slug: string, payload: UpdateArticlePayload, cb?: Callback) => {
  const { response, error } = await apiCall({
    ...API_URLS.ARTICLES.UPDATE_ARTICLE(slug),
    payload,
  })
  if (!error && response?.status === 200) {
    cb?.onSuccess?.(response.data.article)
  } else {
    cb?.onError?.()
  }
  cb?.onFinally?.()
}

const deleteArticle = async (slug: string, cb?: Callback) => {
  const { error } = await apiCall(API_URLS.ARTICLES.DELETE_ARTICLE(slug))
  if (!error) {
    cb?.onSuccess?.()
  } else {
    cb?.onError?.()
  }
  cb?.onFinally?.()
}

const getArticle = async (slug: string, cb?: Callback) => {
  const { response, error } = await apiCall({ ...API_URLS.ARTICLES.GET_ARTICLE(slug) })

  if (!error && response?.status === 200) {
    const result = response.data
    cb?.onSuccess?.(result.article)
  } else {
    cb?.onError?.()
  }
  cb?.onFinally?.()
}

export const articleActions = {
  getFollowedUsersArticles,
  getGlobalArticles,
  deleteArticle,
  updateArticle,
  createArticle,
  getArticle,
}
