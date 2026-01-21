import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";
import useFetchFriends from "../utils/useFetchFriends";
import FriendsListSkeleton from "../skelton/FriendsSkull";

export default function Friends({
  id,
  friendIdChanger,
  chatId,
  refreshFriends,
  socket,
}) {
  const url = useContext(UrlContext);
  const [search, setSearch] = useState("");
  const { friends, error, loading } = useFetchFriends(
    url,
    id,
    refreshFriends,
    socket,
  );

  if (loading) return <FriendsListSkeleton />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="space-y-2">
      <div>
        <input
          type="search"
          className="p-2 outline-none focus:ring-1 rounded-md bg-bg2 dark:bg-dbg2 w-full"
          name="search"
          value={search}
          placeholder="search friends..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {friends &&
        friends
          .filter((friend) =>
            `${friend.first_name} ${friend.last_name}`
              .toLowerCase()
              .includes(search.toLowerCase()),
          )
          .map((friend) => (
            <div
              className={`bub-3d rounded-md p-3 flex gap-3 cursor-pointer outline-none active:translate-y-0.5  ${chatId === friend.id ? "bg-green" : ""}`}
              key={friend.id}
              onClick={() => friendIdChanger(friend.id)}
            >
              <img
                className="size-12 rounded-md bg-dbg dark:bg-bg"
                src={friend.avatar}
              />
              <div>
                <h2 className="font-bold line-clamp-1">
                  {friend.first_name} {friend.last_name}
                </h2>
                <div className="flex gap-2 items-center">
                  <p>{friend.online ? "Online" : "Offline"}</p>
                  <div
                    className={`${friend.online ? "bg-on" : "bg-gray-400"} min-h-2 min-w-2 rounded-[50%]`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
