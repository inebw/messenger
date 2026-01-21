import { useState } from "react";
import Friends from "./Friends";
import Chat from "./Chat";
import SendMessage from "./SendMessage";
import AddFriend from "./AddFriend";
import FriendIcon from "../assets/FriendIcon";
import FriendHeader from "./FriendHeader";
import ChatNull from "./ChatNull";

export default function Authorized({ id, socket }) {
  const [chatId, setChatId] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [refreshFriends, setRefreshFriends] = useState(0);
  const [chatVisible, setChatVisible] = useState(false);
  const friendIdChanger = (friendId) => {
    setChatId(friendId);
    setChatVisible(true);
  };
  const addFriendHandler = () => {
    setShowAddFriend(true);
  };
  const refreshFriendsList = () => {
    setRefreshFriends((prev) => prev + 1);
  };

  const chatIdNull = () => {
    setChatId(null);
    setChatVisible(false);
  };
  return (
    <div
      className={`flex gap-5 relative h-[88%] ${showAddFriend ? "invisible" : ""}`}
    >
      <div
        className={`${chatVisible ? "hidden" : "flex"} sm:flex flex-col gap-5 box-3d h-[88vh] max-h-[95vh]  lg:h-[84vh] w-full p-2  sm:w-[30%] rounded-md lg:p-5 dark:bg-secondary bg-dsecondary`}
      >
        {showAddFriend && (
          <AddFriend
            id={id}
            setShowAddFriend={setShowAddFriend}
            refreshFriendsList={refreshFriendsList}
            refreshFriends={refreshFriends}
            socket={socket}
          />
        )}
        <Friends
          id={id}
          friendIdChanger={friendIdChanger}
          chatId={chatId}
          refreshFriends={refreshFriends}
          socket={socket}
        />
        <button
          className="btn-cd mt-auto flex gap-3 bg-yello text-fg"
          onClick={addFriendHandler}
        >
          <p>Add Friend</p>
          <FriendIcon className={"w-4"} />
        </button>
      </div>
      {!chatId && <ChatNull />}
      <div
        className={`${chatVisible ? "flex" : "hidden"} box-3d flex-col gap-3 justify-between w-full sm:w-[70%] h-[88vh] lg:h-[84vh] rounded-md lg:p-5 p-2 dark:bg-secondary bg-dsecondary `}
      >
        {chatId && <FriendHeader chatId={chatId} chatIdNull={chatIdNull} />}
        {chatId && <Chat id={id} friendId={chatId} socket={socket} />}
        <SendMessage id={id} friendId={chatId} socket={socket} />
      </div>
    </div>
  );
}
