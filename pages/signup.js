import React from "react";
import Head from "next/head";
import SignUpForm from "../components/signupform.js";

const Signup = () => (
  <div>
    <Head>
      <title>Sign Up</title>
    </Head>

    <div>
      <h2 className="title">Retroflect Sign Up</h2>
    </div>
    <SignUpForm />
  </div>
);

export default Signup;
