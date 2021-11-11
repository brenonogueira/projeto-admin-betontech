export const initialState = {
  isLogged: false,
  user: null,

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
        user: null,

      };

    default:
			return state;
  }
};

export default authReducer;
