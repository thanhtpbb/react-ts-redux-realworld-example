import { Reducer } from 'redux'
import { TagAction, TagActionType, TagState } from './tag.type'

const initialState: TagState = {
  isFetching: false,
  tags: [],
}

const tagReducer: Reducer<TagState, TagAction> = (state = initialState, action) => {
  switch (action.type) {
    case TagActionType.TAG_ACTION_PENDING:
      return { ...state, isFetching: true }
    case TagActionType.TAG_ACTION_FAILURE:
      return { ...state, isFetching: false }
    case TagActionType.GET_TAGS_SUCCESS:
      return { ...state, isFetching: false, tags: action.payload.tags }
    default:
      return state
  }
}

export default tagReducer
