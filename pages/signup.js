import React from "react";
import Head from "next/head";

const Signup = () => (
  <div>
    <Head>
      <title>Sign Up</title>
    </Head>

    <div>
      <h1 className="title">Retroflect Sign Up</h1>
    </div>
    <form>
      <label>
        First Name:&nbsp;&nbsp;
        <input type="text" name="firstname" />
      </label>
      <br />
      <br />
      <label>
        Last Name:&nbsp;&nbsp;
        <input type="text" name="lastname" />
      </label>
      <br />
      <br />
      <label>
        Email:&nbsp;&nbsp;
        <input type="text" name="email" />
      </label>
      <br />
      <br />
      <label>
        Password:&nbsp;&nbsp;
        <input type="password" name="password" />
      </label>
      <br />
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  </div>
);

export default Signup;
