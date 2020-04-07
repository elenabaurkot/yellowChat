import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../actions/authActions";
import { clearErrors } from "../actions/errorAction";
// import { getUserInfo } from "../utils/API";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      user: {}
    };
  }

  static propTypes = {
    isRegistered: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object,
    loginUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  // probably need a component did update here
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ message: error.message.message });
      } else {
        this.setState({ message: null });
      }
    }
    // if authenticated, redirect to main page
    // need to make this work still
    if (isAuthenticated) {
      console.log("You're logged in");
      if (this.props.usertype === "Vendor") {
        this.props.history.push("/customers");
      } else {
        this.props.history.push("/vendors");
      }
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  // handleGetUser = () => {
  //   getUserInfo()
  //     .then(({ data: user }) => {
  //       console.log("getVendors", user);
  //       this.setState({ user });
  //     })
  //     .catch((err) => console.log(err));
  //   }


  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
      // maybe here I can do axios call to get usertype? 
    };
    // this.handleGetUser();
    console.log(userData);
    this.props.loginUser(userData);
    // AXIOS CALL HERE TO GET REST OF USER INFO
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account?{" "}
                <Link to="/vendorCustomer">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="email"
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="password"
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable  red lighten-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  isRegistered: state.auth.isRegistered,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateProps, { loginUser, clearErrors })(Login);
