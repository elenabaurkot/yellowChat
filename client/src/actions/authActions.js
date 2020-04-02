import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
import {returnErrors} from "./errorAction";


import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  AUTH_ERROR
} from "./types";

// Register User
export const registerUser = ({company, name, username, email, password, usertype, categories, street, city, state, zip, phone, website}) => dispatch => {
  // headers
  const config= {
    headers: 
    {"Content-type": "application/json"}
  }
  // request body
  const body= JSON.stringify({company, name, username, email, password, usertype, categories, street, city, state, zip, phone, website});
  axios
    .post("/api/register", body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS, 
      payload: res.data
    })) 
    // catch registration errors
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
      dispatch({
        type: REGISTER_FAIL
      })
    });
  };

// Login - get user token
export const loginUser = ({email, password}) => dispatch => {
  // headers
  const config= {
    headers: 
    {"Content-type": "application/json"}
  }
  // request body
  const body= JSON.stringify({email, password});
  axios
    .post("/api/login", body, config)
    .then(res => dispatch({
      type: LOGIN_SUCCESS, 
      payload: res.data
    })) 
    // catch registration errors
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
      dispatch({
        type: LOGIN_FAIL
      })
    });
  };

// Set up config headers and token
export const tokenConfig = (getState) => {
  // get token from local storage
  const token = getState().auth.token;
  // headers
  const config= {
    headers: 
    {"Content-type": "application/json"}
  };
  // if token is present, reconfig headers to token
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
}


// User loading
export const setUserLoading = () => (dispatch, getState) => {
  // this is what happens when user loading
  dispatch({
    type: USER_LOADING
  });
  axios
  .get("/user/login", tokenConfig(getState))
  .then(res => dispatch({
    type: USER_LOADED, 
    payload: res.data
  })) 
  // catch registration errors
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERROR
    })
  });
};

// Log user out
export const logoutUser = () => dispatch => {
  return {
    type: LOGOUT_SUCCESS
  }
};