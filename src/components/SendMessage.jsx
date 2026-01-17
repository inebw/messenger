import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function SendMessage({ id, friendId }) {
  const url = useContext(UrlContext);
  const [msg, setmsg] = useState("");

  const changeHandler = (e) => {
    setmsg(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/messages/${id}/${friendId}`, {
      method: "POST",
      body: JSON.stringify({ message: msg }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    setmsg("");
  };
  return (
    <form onSubmit={onSubmit} method="POST">
      <label htmlFor="message">
        <input
          onChange={changeHandler}
          type="text"
          name="message"
          value={msg}
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
