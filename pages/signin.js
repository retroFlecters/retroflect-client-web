import React from "react";
import Head from "next/head";

const Signin = () => (
  <div>
    <Head>
      <title>Sign In</title>
    </Head>

    <div>
      <h1 className="title">Retroflect Sign In</h1>
    </div>
    <form>
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
      <input type="submit" value="Sign In" />
    </form>
  </div>
);

export default Signin;
