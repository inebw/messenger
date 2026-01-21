import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";
import RegisterMessage from "./RegisterMessage";
import AsUser from "./AsUser";

export default function Login({ user, setUser, toggleRefreshUser, socket }) {
  const url = useContext(UrlContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("loading");
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();

    if (response.ok) {
      setMsg(data);
      setErrors(null);
      socket.connect();
      toggleRefreshUser();
      setUser(data);
    } else {
      setErrors(data);
      setMsg(null);
    }
  };

  const loginAsOptimus = async (e) => {
    setMsg("loading");
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({ username: "optimus", password: "optimus8888" }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    setErrors(null);
    socket.connect();
    setUser(data);
    toggleRefreshUser();
  };

  const loginAsFrank = async (e) => {
    setMsg("loading");
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({ username: "franksr", password: "frank8888" }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    setErrors(null);
    socket.connect();
    setUser(data);
    toggleRefreshUser();
  };

  return (
    <div className="box-3d flex-1 w-full flex flex-col gap-3 items-center justify-center">
      <form
        className="box-3d p-5 flex flex-col gap-3 items-center "
        onSubmit={onSubmit}
        method="post"
      >
        <label htmlFor="username">
          <input
            className="p-2 outline-none focus:ring-1 rounded-md bg-bg2 dark:bg-dbg2"
            onChange={handleChange}
            type="text"
            name="username"
            value={formData.username}
            placeholder="username"
            required
          />
        </label>
        <label htmlFor="password">
          <input
            className="p-2 outline-none focus:ring-1 rounded-md bg-bg2 dark:bg-dbg2"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
          />
        </label>
        <button className="btn-cd bg-green">Login</button>
      </form>
      {(msg || errors) && (
        <RegisterMessage
          msg={msg}
          errors={errors}
          toggleRegister={() => console.log(hi)}
        />
      )}
      <p>OR</p>
      <div className="bub-3d rounded-md p-3 flex flex-col gap-3">
        <h2 className="font-bold text-center">LOGIN AS</h2>
        <AsUser id={"12"} onClickHandler={loginAsOptimus} />
        <AsUser id={"10"} onClickHandler={loginAsFrank} />
      </div>
    </div>
  );
}
