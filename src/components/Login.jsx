import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";
import RegisterMessage from "./RegisterMessage";

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
    </div>
  );
}
