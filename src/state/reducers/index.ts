import { combineReducers } from 'redux'
import repositoriesReducer from './repositoriesReducer'

const reducers = combineReducers({
  repositories: repositoriesReducer //repositories key : repositories reducer
})

export default reducers

//We exporting a type called RootState to specify that the RootState type is set to whatever the reducers function returns
export type RootState = ReturnType<typeof reducers>