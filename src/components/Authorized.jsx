import { useState } from "react";
import Friends from "./Friends";
import Chat from "./Chat";
import SendMessage from "./SendMessage";
import AddFriend from "./AddFriend";

export default function Authorized({ id, socket }) {
  const [chatId, setChatId] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const friendIdChanger = (friendId) => {
    setChatId(friendId);
  };
  const addFriendHandler = () => {
    setShowAddFriend(true);
  };
  return (
    <div className="flex gap-5 relative border h-[90%] ">
      <div className="flex flex-col gap-5 border ">
        {showAddFriend && (
          <AddFriend id={id} setShowAddFriend={setShowAddFriend} />
        )}
        <Friends id={id} friendIdChanger={friendIdChanger} />
        <button onClick={addFriendHandler}>Add Friend</button>
      </div>
      <div className="border">
        {chatId && <Chat id={id} friendId={chatId} socket={socket} />}
        <SendMessage id={id} friendId={chatId} socket={socket} />
      </div>
    </div>
  );
}
