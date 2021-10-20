/* eslint-disable import/no-anonymous-default-export */
export const login = (payload) => {
  return { type: "LOGIN", payload };
};

export const logout = () => {
  return { type: "LOGOUT" };
};

export default {
    login,
    logout,
  };
  