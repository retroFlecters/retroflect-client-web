import React, { useState } from "react";
import axios from "axios";

const Entry = () => {
  const [entries, setEntries] = useState([]);

  axios
    .post(
      "https://retroflect.herokuapp.com/api/auth/signin",
      {
        email: "yogibear@mountain.com",
        password: "Bearpassword123!"
      },
      { withCredentials: true }
    )
    .then(response => console.log(response.data))
    .then(
      axios
        .get("https://retroflect.herokuapp.com/api/entries", {
          withCredentials: true
        })
        .then(entries => {
          setEntries(JSON.stringify(entries.data));
          console.log(entries.data);
        })
    );

  return (
    <div>
      <h1>Hello</h1>
      {entries}
    </div>
  );
};

export default Entry;
