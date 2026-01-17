import { useState } from "react";
import Friends from "./Friends";
import Chat from "./Chat";
import SendMessage from "./SendMessage";

export default function Authorized({ id, socket }) {
  const [chatId, setChatId] = useState(null);
  const friendIdChanger = (friendId) => {
    setChatId(friendId);
  };
  return (
    <div className="flex gap-5">
      <Friends id={id} friendIdChanger={friendIdChanger} />
      <div>
        {chatId && <Chat id={id} friendId={chatId} socket={socket} />}
        <SendMessage id={id} friendId={chatId} socket={socket} />
      </div>
    </div>
  );
}
