import React from "react";
import Head from "next/head";
import SignInForm from "../components/signinform.js";

const Signin = () => (
  <div>
    <Head>
      <title>Sign In</title>
    </Head>

    <h2>Sign In</h2>
    <SignInForm />
  </div>
);

export default Signin;
