import React from "react";
import withUser from "./Hoc";

function HocUser({ name, user }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Role: {user}</p>
    </div>
  );
}

export default withUser(HocUser, "Kartik");
