import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";

export default function SendMessage({ id, friendId, socket }) {
  const url = useContext(UrlContext);
  const [msg, setmsg] = useState("");

  const changeHandler = (e) => {
    setmsg(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    socket.emit("postMessage", { id, friendId, message: msg });
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
