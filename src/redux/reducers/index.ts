import { Reducer, combineReducers } from 'redux'
import tagReducer from './tag/tag.reducer'

const rootReducer = combineReducers({
  tag: tagReducer,
})

export type RootState = ReturnType<typeof rootReducer>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer: Reducer<RootState, any> = (state: RootState | undefined, action: any) => rootReducer(state, action)

export default reducer