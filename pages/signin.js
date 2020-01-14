import React from "react";
import Head from "next/head";
import SignInForm from "../components/signinform.js";

const Signin = () => (
  <div>
    <Head>
      <title>Sign In</title>
    </Head>
    <div>
      <h2>Retroflect Sign In</h2>
    </div>
    <SignInForm />
    <br />
    <br />
    Or, if you don&apos;t already have an account: <a href="/signup">Sign Up</a>
    <br />
    <br />
  </div>
);

export default Signin;
