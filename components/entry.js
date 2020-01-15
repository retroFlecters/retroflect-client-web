import React, { useState } from "react";
import axios from "axios";

const Entry = () => {
  const [entries, setEntries] = useState("");
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");

  axios
    .post(
      "https://retroflect.herokuapp.com/api/auth/signin",
      {
        email: "yogibear@mountain.com",
        password: "Bearpassword123!"
      },
      { withCredentials: true }
    )
    .then(response => {
      setUsername(response.data.firstName);
      setUseremail(response.data.email);
      console.log(response.data);
    })
    .then(
      axios
        .get("https://retroflect.herokuapp.com/api/entries", {
          withCredentials: true
        })
        .then(response => {
          setEntries(JSON.stringify(response.data));
          console.log(response.data);
        })
    );

  return (
    <div>
      <h1>Hello</h1>
      {username}
      <br />
      {useremail}
      <br />
      {entries}
    </div>
  );
};

export default Entry;
