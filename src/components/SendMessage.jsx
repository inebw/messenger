import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";
import Send from "../assets/Send";

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
    <form
      className="bub-3d rounded-md p-2 flex gap-3 flex-col relative focus-within:outline-1 focus-within:outline-gray-50"
      onSubmit={onSubmit}
      method="POST"
    >
      <label
        className="w-full h-full absolute cursor-text"
        htmlFor="message"
      ></label>
      <textarea
        className="w-full outline-0 resize-none"
        onChange={changeHandler}
        type="text"
        id="message"
        name="message"
        value={msg}
        required
      ></textarea>
      <button
        className="btn-cd flex gap-2 bg-green self-end z-10"
        type="submit"
      >
        <p>Send</p>
        <Send className={"w-4 fill-fg dark:fill-dfg"} />
      </button>
    </form>
  );
}
