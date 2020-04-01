import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorAction";
// import Alert from "../components/Alert";

class VendorRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      message: null

    };
  }

  static propTypes = {
    isRegistered: PropTypes.bool, 
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object,
    registerUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }


componentDidUpdate(prevProps) {
  const { error, isRegistered, isAuthenticated } = this.props;
  if(error !== prevProps.error) {
    // check for register error
    if(error.id === "REGISTER_FAIL") {
      this.setState({message: error.message.message})
    } else {
      this.setState({message: null})
    }
  }
  // if authenticated, redirect to login page
  if(isRegistered && !isAuthenticated) {
    this.props.history.push("/login");
  }
}

onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value});
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      usertype: "Vendor",
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
this.props.registerUser(newUser);
  };
render() {
    // const { errors } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h3> Vendor Registration</h3>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="name"
                  // error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="email"
                  // error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="password"
                  // error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="password2"
                  // error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  isRegistered: state.auth.isRegistered, 
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(
  mapStateProps, 
  {registerUser, clearErrors}
) (VendorRegister);