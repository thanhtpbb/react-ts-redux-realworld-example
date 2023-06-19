import { Callback } from '@/types/others/callback'
import { TagActionType, TagThunkAction } from './tag.type'
import { apiCall } from '@/configs/api'
import { API_URLS } from '@/configs/api/endpoint'
import { AppDispatch } from '@/redux/store'

const getAllTags =
  (cb?: Callback): TagThunkAction =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: TagActionType.TAG_ACTION_PENDING })

    const { response, error } = await apiCall(API_URLS.DEFAULT.GET_TAGS())

    if (!error && response?.status === 200) {
      dispatch({
        type: TagActionType.GET_TAGS_SUCCESS,
        payload: response.data,
      })
      cb?.onSuccess?.(response.data)
    } else {
      dispatch({ type: TagActionType.TAG_ACTION_FAILURE })
    }
  }

export const tagActions = { getAllTags }
