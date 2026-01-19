import { useContext, useState } from "react";
import useFetchAllUsers from "../utils/useFetchAllUsers";
import { UrlContext } from "../utils/UrlContext";
import useFetchFriends from "../utils/useFetchFriends";

export default function AddFriend({
  id,
  setShowAddFriend,
  refreshFriendsList,
  refreshFriends,
}) {
  const url = useContext(UrlContext);
  const { allUsers, loading, error } = useFetchAllUsers(
    url,
    id,
    refreshFriends,
  );
  const { friends } = useFetchFriends(url, id, refreshFriends);
  const [search, setSearch] = useState("");
  const defaultClass =
    "visible absolute top-1/2 left-1/2 box-3d m-2 p-2 rounded-md w-[50%] h-[90%] translate-y-[-50%] translate-x-[-50%] flex flex-col gap-5";

  if (loading) return <p className={defaultClass}>Loading ...</p>;

  if (error) return <p>{error.message}</p>;

  const friendAdder = async (friendId) => {
    await fetch(`${url}/friends/${id}/${friendId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    await fetch(`${url}/friends/${friendId}/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    refreshFriendsList();
  };

  const friendRemover = async (friendId) => {
    await fetch(`${url}/friends/${id}/${friendId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    await fetch(`${url}/friends/${friendId}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    refreshFriendsList();
  };

  return (
    <div className={defaultClass}>
      <input
        type="search"
        className="p-2 outline-none focus:ring-1 rounded-md bg-bg2 dark:bg-dbg2"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="enter username to search"
      />
      <button
        className="pl-3 pr-3 p-1 font-bold cursor-pointer hover:opacity-80 rounded-[50%] bg-red absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
        onClick={() => setShowAddFriend(false)}
      >
        x
      </button>
      <div className="space-y-3">
        {search &&
          allUsers
            .filter((user) =>
              user.username.toLowerCase().includes(search.toLowerCase()),
            )
            .map((user) => (
              <div className="box-3d rounded-md p-3 flex gap-3 cursor-pointer outline-none ">
                <img
                  className="size-18 rounded-md bg-dbg dark:bg-bg"
                  src={user.avatar}
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold">
                    {user.first_name} {user.last_name}
                  </p>
                  {friends &&
                  friends.find((friend) => friend.id === user.id) ? (
                    <button
                      className="btn-cd bg-red "
                      onClick={() => friendRemover(user.id)}
                    >
                      Remove Friend -{" "}
                    </button>
                  ) : (
                    <button
                      className="btn-cd bg-green"
                      onClick={() => friendAdder(user.id)}
                    >
                      Add Friend +
                    </button>
                  )}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
