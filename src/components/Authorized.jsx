import { useState } from "react";
import Friends from "./Friends";
import Chat from "./Chat";
import SendMessage from "./SendMessage";

export default function Authorized({ id }) {
  const [chatId, setChatId] = useState(null);
  const friendIdChanger = (friendId) => {
    setChatId(friendId);
  };
  return (
    <div className="flex gap-5">
      <Friends id={id} friendIdChanger={friendIdChanger} />
      <div>
        <Chat id={id} friendId={chatId} />
        <SendMessage id={id} friendId={chatId} />
      </div>
    </div>
  );
}
