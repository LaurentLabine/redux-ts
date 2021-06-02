import { ActionType } from '../action-types'
import { Action } from '../actions'

interface RepositariesState {
  loading: boolean
  error: string | null
  data: string[]
}

const initialState = {
  loading: false,
  error:null,
  data: []
}

const reducer = (
  state: RepositariesState = initialState, 
  action: Action

  ): RepositariesState => {


  switch(action.type) { //Using Typeguard we can determine accordingly to the case what the type of action.payload is.
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: []}
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      //According to interface definition, payload here is an array of strings
      return {loading: false, error: null, data: action.payload}
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      //Here payload holds a string.
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer