import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function Login() {
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
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
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
    </form>
  );
}
