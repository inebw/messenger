import { useContext } from "react";
import useFetchGetUser from "../utils/useFetchGetUser";
import { UrlContext } from "../utils/UrlContext";
import ChatHeaderSkeleton from "../skelton/ChatHeaderSkeleton";

export default function AsUser({ id, onClickHandler }) {
  const url = useContext(UrlContext);
  const { user, loading, error } = useFetchGetUser(url, id);

  if (loading) return <ChatHeaderSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    <div
      className={`btn-cd rounded-md flex gap-3 outline-none`}
      key={user.id}
      onClick={onClickHandler}
    >
      <img className="size-12 rounded-md bg-dbg dark:bg-bg" src={user.avatar} />
      <div>
        <h2 className="font-bold line-clamp-1">
          {user.firstName} {user.lastName}
        </h2>
        <div className="flex gap-2 items-center mr-auto">
          <p>{user.online ? "Online" : "Offline"}</p>
          <div
            className={`${user.online ? "bg-on" : "bg-gray-400"} min-h-2 min-w-2 rounded-[50%]`}
          ></div>
        </div>
      </div>
      <div className="ml-auto"></div>
    </div>
  );
}
