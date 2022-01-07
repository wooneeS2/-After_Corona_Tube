export const LOGIN = "LOGIN/LOGIN";
export const LOGOUT = "LOGIN/LOGOUT";

export const doLogin = { type: LOGIN, doLogin };
export const doLogOut = { type: LOGOUT, doLogOut };

const initalState = {
  login: false,
};

export const login = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
  }
  switch (action.type) {
    case LOGOUT:
      return false;
    default:
      return state;
  }
};
