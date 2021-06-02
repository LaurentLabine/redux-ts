// ref to Course section 4
interface RepositariesState {
  loading: boolean
  error: string | null
  data: string[]
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
  payload: string[]
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR
  payload: string
}

type Action = 
  | SearchRepositoriesAction 
  | SearchRepositoriesSuccessAction 
  | SearchRepositoriesErrorAction

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

const reducer = (
  state: RepositariesState, 
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