import React from "react";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
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
      "A sign-up was submitted: " +
        this.state.firstname +
        " " +
        this.state.lastname +
        " " +
        this.state.email +
        " " +
        this.state.password
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="formholder">
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:&nbsp;
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Last Name:&nbsp;
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
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
    );
  }
}

export default SignUpForm;
