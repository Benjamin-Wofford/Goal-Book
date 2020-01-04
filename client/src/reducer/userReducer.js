import { useReducer } from 'react'

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
  };

  export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "user_loaded":
        return {
          ...state,
          isAuthenticated: true,
          lodaing: false,
          user: payload
        };
      case "register_success":
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case "register_fail":
      case "auth_error":
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export const useMyHook = () => useReducer(reducer, initialState)