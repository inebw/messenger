import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function Regsiter() {
  const url = useContext(UrlContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatar: "1",
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
    <div className="box-3d p-2 flex-1 w-full grid md:flex md:flex-col gap-3 items-center justify-center">
      <form onSubmit={onSubmit} method="post" className="space-y-3 box-3d p-5">
        <h2 className="text-2xl font-bold text-center md:text-left">
          Register
        </h2>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-3 items-center">
            <label htmlFor="firstName">
              <input
                className="p-2 outline-none focus:ring-1 rounded-md bg-bg2 dark:bg-dbg2"
                onChange={handleChange}
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="first name"
                required
              />
            </label>
            <label htmlFor="lastName">
              <input
                className="p-2 outline-none focus:ring-1 rounded-md bg-bg2 dark:bg-dbg2"
                onChange={handleChange}
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="last name"
                required
              />
            </label>

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
                value={formData.password}
                placeholder="password"
                required
              />
            </label>
            <label htmlFor="confirmPassword">
              <input
                className="p-2 outline-none focus:ring-1 rounded-md bg-bg2 dark:bg-dbg2"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="confirm password"
                required
              />
            </label>
          </div>
          <fieldset className="md:flex grid grid-cols-2 gap-5 ">
            <legend className="text-xl font-bold mb-2">
              Select your avatar style
            </legend>

            <div
              className={`${formData.avatar === "1" ? "outline-5 outline-red rounded-md" : ""} relative max-h-max transition-transform ease-in hover:scale-105 flex flex-col p-2 items-center`}
            >
              <label
                className="absolute w-full h-full cursor-pointer"
                htmlFor="robot"
              ></label>
              <img
                className="size-20 bg-fg dark:bg-dfg rounded-md p-2"
                src="https://robohash.org/sfdjlk3.png?set=set1"
              />
              <p>Robot</p>
              <input
                className="hidden"
                type="radio"
                id="robot"
                name="avatar"
                value="1"
                onChange={handleChange}
                checked={formData.avatar === "1"}
              />
            </div>

            <div
              className={`${formData.avatar === "2" ? "outline-5 outline-red rounded-md" : ""} relative max-h-max transition-transform ease-in  hover:scale-105 flex flex-col p-2 items-center`}
            >
              <label
                className="absolute w-full h-full cursor-pointer"
                htmlFor="monster"
              ></label>
              <img
                className="size-20 bg-fg dark:bg-dfg rounded-md p-2"
                src="https://robohash.org/katzeKatzeSinkler.png?set=set2"
              />
              <p>Monster</p>
              <input
                className="hidden"
                type="radio"
                id="monster"
                name="avatar"
                value="2"
                onChange={handleChange}
                checked={formData.avatar === "2"}
              />
            </div>

            <div
              className={`${formData.avatar === "4" ? "outline-5 outline-red rounded-md" : ""} relative max-h-max transition-transform ease-in  hover:scale-105 flex flex-col p-2 items-center`}
            >
              <label
                className="absolute w-full h-full cursor-pointer"
                htmlFor="cat"
              ></label>
              <img
                className="size-20 bg-fg dark:bg-dfg rounded-md p-3"
                src="https://robohash.org/sfdjlk3.png?set=set4"
              />
              <p>Cat</p>
              <input
                className="hidden"
                type="radio"
                id="cat"
                name="avatar"
                value="4"
                onChange={handleChange}
                checked={formData.avatar === "4"}
              />
            </div>
            <div
              className={`${formData.avatar === "3" ? "outline-5 outline-red rounded-md" : ""} relative max-h-max transition-transform ease-in  hover:scale-105 flex flex-col p-2 items-center`}
            >
              <label
                className="absolute w-full h-full z-10 cursor-pointer"
                htmlFor="head"
              ></label>
              <img
                className="size-20 bg-fg dark:bg-dfg rounded-md p-2"
                src="https://robohash.org/sfdjlk3.png?set=set3"
              />
              <p>Robo Head</p>
              <input
                className="hidden"
                type="radio"
                id="head"
                name="avatar"
                value="3"
                onChange={handleChange}
                checked={formData.avatar === "3"}
              />
            </div>
          </fieldset>
        </div>
        <button
          className="btn-cd bg-yello text-fg w-full md:w-50"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
