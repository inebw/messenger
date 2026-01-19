import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function Login({ user, setUser, toggleRefreshUser }) {
  const url = useContext(UrlContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
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
    </div>
  );
}
