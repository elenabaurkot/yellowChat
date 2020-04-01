import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  AUTH_ERROR
  } from "../actions/types";

  const initialState = {
    isAuthenticated: null,
    user: null,
    loading: false,
    isRegistered: null,
    token: localStorage.getItem("token")
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isRegistered: true,
          loading: false,
          user: action.payload
        };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      case REGISTER_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        return {
          ...state,
          ...action.payload,
          isRegistered: true,
          isAuthenticated: false,
          loading: false
        }
      case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        return {
          ...state,
          ...action.payload,
          isRegistered: true,
          isAuthenticated: true,
          loading: false
        }
      case LOGOUT_SUCCESS: 
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
        localStorage.removeItem("token");
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          loading: false,
          isRegistered: false,
          token: null
        }
      default:
        return state;
    }
  }