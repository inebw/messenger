import { useState } from "react";
import Regsiter from "./Register";
import Login from "./Login";

export default function Unauthorized({
  user,
  setUser,
  register,
  toggleRefreshUser,
  socket,
  toggleRegister,
}) {
  return (
    <>
      {register ? (
        <Regsiter toggleRegister={toggleRegister} />
      ) : (
        <Login
          user={user}
          setUser={setUser}
          toggleRefreshUser={toggleRefreshUser}
          socket={socket}
        />
      )}
    </>
  );
}
