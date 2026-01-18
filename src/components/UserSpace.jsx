import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function UserSpace({ user, setUser }) {
  const url = useContext(UrlContext);
  const [className, setClassName] = useState("hidden");
  const logoutUser = async () => {
    await fetch(`${url}/users/logout`, {
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    setUser(null);
  };

  const dropDown = () => {
    if (className === "hidden")
      setClassName("absolute bottom-0 right-0 translate-y-1/1 ");
    else setClassName("hidden");
  };
  return (
    <div>
      <button onClick={dropDown}>{`${user ? user.username : "User"}`}</button>
      <div className={className}>
        {user && (
          <>
            <button onClick={logoutUser}>Logout</button>
          </>
        )}
        {!user && <button>Login</button>}
      </div>
    </div>
  );
}
