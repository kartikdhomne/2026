import React from "react";
import withUser from "./Hoc";

function HocAdmin({ name, user }) {
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Name: {name}</p>
      <p>Role: {user}</p>
    </div>
  );
}

export default withUser(HocAdmin, "Admin");
