import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function Regsiter() {
  const url = useContext(UrlContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/sign-up`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    console.log(response.ok);
  };

  return (
    <form onSubmit={onSubmit} method="post" className="flex flex-col">
      <label htmlFor="firstName">
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="first name"
        />
      </label>
      <label htmlFor="lastName">
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="last name"
        />
      </label>
      <label htmlFor="username">
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={formData.username}
          placeholder="username"
        />
      </label>
      <label htmlFor="password">
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
        />
      </label>
      <label htmlFor="confirmPassword">
        <input
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="confirm password"
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
