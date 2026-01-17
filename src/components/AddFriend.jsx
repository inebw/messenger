import { useContext, useState } from "react";
import useFetchAllUsers from "../utils/useFetchAllUsers";
import { UrlContext } from "../utils/UrlContext";

export default function AddFriend({ id, setShowAddFriend }) {
  const url = useContext(UrlContext);
  const { allUsers, loading, error } = useFetchAllUsers(url);
  const [search, setSearch] = useState("");
  const defaultClass = "absolute top-1/2 left-1/2";

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
  };

  return (
    <div className={defaultClass}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="enter username"
      />
      <button onClick={() => setShowAddFriend(false)}>Close</button>
      <div>
        {search &&
          allUsers
            .filter((user) =>
              user.username.toLowerCase().includes(search.toLowerCase()),
            )
            .map((user) => (
              <div>
                <p>
                  {user.first_name} {user.last_name}
                </p>
                <button onClick={() => friendAdder(user.id)}>
                  Add Friend +
                </button>
              </div>
            ))}
      </div>
    </div>
  );
}
