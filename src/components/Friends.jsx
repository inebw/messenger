import { useContext, useState } from "react";
import { UrlContext } from "../utils/UrlContext";
import useFetchFriends from "../utils/useFetchFriends";

export default function Friends({ id, friendIdChanger }) {
  const url = useContext(UrlContext);
  const [search, setSearch] = useState("");
  const { friends, error, loading } = useFetchFriends(url, id);

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <div>
        <input
          type="search"
          name="search"
          value={search}
          placeholder="search friends..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {friends
        .filter((friend) =>
          `${friend.first_name} ${friend.last_name}`
            .toLowerCase()
            .includes(search.toLowerCase()),
        )
        .map((friend) => (
          <p onClick={() => friendIdChanger(friend.id)}>
            {friend.first_name} {friend.last_name}
          </p>
        ))}
    </div>
  );
}
