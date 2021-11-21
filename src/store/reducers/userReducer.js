export const initialState = {
  index: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case  "INDEX_USER": return { 
      ...state, 
      index: action.values 
    }
    default: return state
  }

}

export default userReducer;