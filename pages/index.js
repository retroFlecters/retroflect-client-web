import React from "react";
import Head from "next/head";
import Moodslider from "../components/moodslider";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h2>Retroflect</h2>
    <Moodslider />
  </div>
);

export default Home;
