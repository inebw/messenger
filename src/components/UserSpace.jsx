import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";
import LogoutIcon from "../assets/LogoutIcon";

export default function UserSpace({
  user,
  setUser,
  toggleRegister,
  register,
  socket,
}) {
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
    socket.disconnect();
  };

  const dropDown = () => {
    if (className === "hidden")
      setClassName(
        "absolute bottom-0 right-0 translate-y-[110%] box-3d p-5 z-10 w-[200px]",
      );
    else setClassName("hidden");
  };

  if (user)
    return (
      <div className="relative">
        <button
          onClick={dropDown}
          className="btn-3d w-[200px] flex gap-2 items-center"
        >
          <img
            className="size-7 rounded-md bg-dbg dark:bg-bg"
            src={user.avatar}
          />
          <p className="truncate">{user.fullName}</p>
        </button>
        <div className={className}>
          <button
            className="btn-3d w-full flex gap-2 items-center"
            onClick={logoutUser}
          >
            <p>Logout</p>
            <LogoutIcon className={"w-4 fill-fg dark:fill-dfg"} />
          </button>
        </div>
      </div>
    );

  return (
    <button
      className={`${register ? "bg-green" : "bg-yello"} btn-cd text-fg`}
      onClick={toggleRegister}
    >
      {register ? "Login" : "Register"}
    </button>
  );
}
