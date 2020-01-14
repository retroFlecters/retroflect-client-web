import React from "react";
import Head from "next/head";
import SignUpForm from "../components/signupform.js";

const Signup = () => (
  <div>
    <Head>
      <title>Sign Up</title>
    </Head>
    <div>
      <h2>Retroflect Sign Up</h2>
    </div>
    <SignUpForm />
    <br />
    <br />
    Or, if you already have an account: <a href="/signin">Sign In</a>
    <br />
    <br />
  </div>
);

export default Signup;
