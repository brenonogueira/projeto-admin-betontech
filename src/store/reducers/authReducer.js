export const initialState = {
  isLogged: false,
  user: null,
  expire: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
        expire: action.payload.exp,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
        user: null,
        expire: null,
      };

    default:
			return state;
  }
};

export default authReducer;
