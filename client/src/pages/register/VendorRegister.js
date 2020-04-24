import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorAction";

class VendorRegister extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      name: "",
      email: "",
      password: "",
      password2: "",
      categories: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      website: "",
      message: null,
      error: null
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

    if (this.state.company === '' ||
        this.state.name === '' ||
        this.state.email === '' ||
        this.state.password === '' ||
        this.state.password2 === '' 
     ) {
      return this.setState({error: 'Please enter all required fields'})
    };

    if (this.state.password !== this.state.password2) {
      return this.setState({error: 'Passwords must match'})
    }

const newUser = {
      company: this.state.company,
      name: this.state.name,
      usertype: "Vendor",
      // takes out the spaces
      username: this.state.company.replace(/\s+/g, ''),
      categories: this.state.categories,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      website: this.state.website
    };

// console.log(newUser);
this.props.registerUser(newUser);
  };
render() {
return (
      <div className="container" style={{ backgroundColor: "white"}}>
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
                  name="company"
                  id="company"
                  type="text"
                />
                {/* error message */}
                {this.state.error &&
                    !this.state.company.length && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
                <label htmlFor="company">Company *</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="name"
                  id="name"
                  type="text"
                />
                {/* error message */}
                {this.state.error &&
                    !this.state.name.length && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
                <label htmlFor="name">Name *</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="email"
                  id="email"
                  type="email"
                />
                {/* error message */}
                {this.state.error &&
                    !this.state.email.length && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
                <label htmlFor="email">Email *</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="categories"
                  id="categories"
                  type="text"
                />
                <label htmlFor="categories">Business Categories</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="password"
                  // error={errors.password}
                  id="password"
                  type="password"
                />
                {/* error message */}
                {this.state.error &&
                    !this.state.password.length && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
                <label htmlFor="password">Password *</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="password2"
                  id="password2"
                  type="password"
                />
                {/* error message */}
                {this.state.error &&
                    !this.state.password2.length && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
                {this.state.error &&
                    this.state.password !== this.state.password2 && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
                <label htmlFor="password2">Confirm Password *</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="street"
                  id="street"
                  type="text"
                />
                <label htmlFor="street">Street</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="city"
                  id="city"
                  type="text"
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="state"
                  id="state"
                  type="text"
                />
                <label htmlFor="state">State</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="zip"
                  id="zip"
                  type="text"
                />
                <label htmlFor="zip">Zip Code</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="phone"
                  id="phone"
                  type="text"
                />
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  name="website"
                  id="website"
                  type="text"
                />
                <label htmlFor="website">Website</label>
                {this.state.error &&
                    this.state.password !== this.state.password2 && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
                {this.state.error &&
                    (!this.state.company.length || !this.state.name.length || !this.state.email.length || !this.state.password.length || !this.state.password2.length) && (
                        <div className='alert alert-danger my-2'>
                            {this.state.error}
                        </div>
                    )}
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
                  className="btn btn-large waves-effect waves-light hoverable  blue accent-3"
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