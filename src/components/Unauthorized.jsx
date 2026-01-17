import { useState } from "react";
import Regsiter from "./Register";
import Login from "./Login";

export default function Unauthorized({ user, setUser }) {
  const [register, setRegister] = useState(true);

  const toggleRegister = () => {
    setRegister((prev) => !prev);
  };
  return (
    <>
      <div>
        <button onClick={toggleRegister}>
          {register ? "Login" : "Register"}
        </button>
      </div>
      {register ? <Regsiter /> : <Login user={user} setUser={setUser} />}
    </>
  );
}
