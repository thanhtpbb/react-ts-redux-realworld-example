import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { GetTagsResponse } from '@/configs/api/response'

export interface TagState {
  isFetching: boolean
  tags: string[]
}

export enum TagActionType {
  TAG_ACTION_PENDING = 'TAG_ACTION_PENDING',
  TAG_ACTION_FAILURE = 'TAG_ACTION_FAILURE',
  GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS',
}

export interface TagActionPending {
  type: TagActionType.TAG_ACTION_PENDING
}

export interface TagActionFailure {
  type: TagActionType.TAG_ACTION_FAILURE
}

export interface GetTagSuccess {
  type: TagActionType.GET_TAGS_SUCCESS
  payload: GetTagsResponse
}

export type TagAction = TagActionFailure | TagActionPending | GetTagSuccess

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TagThunkAction = ThunkAction<void, RootState, any, TagAction>
