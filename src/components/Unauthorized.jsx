import { useState } from "react";
import Regsiter from "./Register";
import Login from "./Login";

export default function Unauthorized({
  user,
  setUser,
  register,
  toggleRefreshUser,
}) {
  return (
    <>
      {register ? (
        <Regsiter />
      ) : (
        <Login
          user={user}
          setUser={setUser}
          toggleRefreshUser={toggleRefreshUser}
        />
      )}
    </>
  );
}
