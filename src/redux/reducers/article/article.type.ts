import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { IArticle } from '@/types/models/IArticle'
import { GetFollowedUsersArticlesResponse, GetGlobalArticlesResponse } from '@/configs/api/response'

export interface ArticleState {
  isFetching: boolean
  articles: IArticle[]
}

export enum ArticleActionType {
  ARTICLE_ACTION_PENDING = 'ARTICLE_ACTION_PENDING',
  ARTICLE_ACTION_FAILURE = 'ARTICLE_ACTION_FAILURE',

  GET_FOLLOWED_USERS_ARTICLES = 'GET_FOLLOWED_USERS_ARTICLES',
  GET_GLOBAL_ARTICLES_SUCCESS = 'GET_GLOBAL_ARTICLES_SUCCESS',
  CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS',
  GET_ARTICLE_SUCCESS = 'GET_AN_ARTICLE_SUCCESS',
  UPDATE_ARTICLE_SUCCESS = 'UPDATE_ARTICLE_SUCCESS',
  DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS',
}

export interface ArticleActionPending {
  type: ArticleActionType.ARTICLE_ACTION_PENDING
}

export interface ArticleActionFailure {
  type: ArticleActionType.ARTICLE_ACTION_FAILURE
}

export interface GetFollowedUsersArticles {
  type: ArticleActionType.GET_FOLLOWED_USERS_ARTICLES
  payload: GetFollowedUsersArticlesResponse
}

export interface GetGlobalArticlesSuccess {
  type: ArticleActionType.GET_GLOBAL_ARTICLES_SUCCESS
  payload: GetGlobalArticlesResponse
}

export interface CreateArticleSuccess {
  type: ArticleActionType.CREATE_ARTICLE_SUCCESS
}

export interface GetArticleSuccess {
  type: ArticleActionType.GET_ARTICLE_SUCCESS
}

export interface UpdateArticleSuccess {
  type: ArticleActionType.UPDATE_ARTICLE_SUCCESS
}

export interface DeleteArticleSuccess {
  type: ArticleActionType.DELETE_ARTICLE_SUCCESS
}

export type ArticleAction =
  | ArticleActionPending
  | ArticleActionFailure
  | GetFollowedUsersArticles
  | GetGlobalArticlesSuccess
  | CreateArticleSuccess
  | GetArticleSuccess
  | UpdateArticleSuccess
  | DeleteArticleSuccess

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArticleThunkAction = ThunkAction<void, RootState, any, ArticleAction>
