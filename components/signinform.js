import React from "react";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(
      "A sign-in was submitted: " + this.state.email + " " + this.state.password
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="formholder">
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:&nbsp;
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Password:&nbsp;
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
