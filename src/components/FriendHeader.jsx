import { useContext } from "react";
import useFetchGetUser from "../utils/useFetchGetUser";
import { UrlContext } from "../utils/UrlContext";
import BackIcon from "../assets/BackIcon";
import ChatHeaderSkeleton from "../skelton/ChatHeaderSkeleton";

export default function FriendHeader({ chatId, chatIdNull }) {
  const url = useContext(UrlContext);
  const { user, loading, error } = useFetchGetUser(url, chatId);
  if (loading) return <ChatHeaderSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    <div
      className={`bub-3d rounded-md p-3 flex gap-3 outline-none `}
      key={user.id}
      // onClick={() => friendIdChanger(friend.id)}
    >
      <img className="size-12 rounded-md bg-dbg dark:bg-bg" src={user.avatar} />
      <div>
        <h2 className="font-bold line-clamp-1">
          {user.first_name} {user.last_name}
        </h2>
        <div className="flex gap-2 items-center">
          <p>{user.online ? "Online" : "Offline"}</p>
          <div
            className={`${user.online ? "bg-on" : "bg-gray-400"} min-h-2 min-w-2 rounded-[50%]`}
          ></div>
        </div>
      </div>
      <button className="ml-auto" onClick={chatIdNull}>
        <BackIcon
          className={
            "w-8 fill-fg dark:fill-dfg active:scale-105 cursor-pointer"
          }
        />
      </button>
    </div>
  );
}
