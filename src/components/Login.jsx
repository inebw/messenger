import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function Login({ user, setUser }) {
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
  };
  return (
    <form onSubmit={onSubmit} method="post">
      <label htmlFor="username">
        <input
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
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
        />
      </label>
      <button>Login</button>
    </form>
  );
}
