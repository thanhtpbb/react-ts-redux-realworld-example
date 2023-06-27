import { apiCall } from '@/configs/api'
import { API_URLS } from '@/configs/api/endpoint'
import { UpdateArticlePayload } from '@/configs/api/payload'
import { Callback } from '@/types/others/callback'

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
}

export const articleActions = { deleteArticle, updateArticle }
