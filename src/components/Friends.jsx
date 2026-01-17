import { useContext } from "react";
import { UrlContext } from "../utils/UrlContext";
import useFetchFriends from "../utils/useFetchFriends";

export default function Friends({ id, friendIdChanger }) {
  const url = useContext(UrlContext);
  const { friends, error, loading } = useFetchFriends(url, id);

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {friends.map((friend) => (
        <p onClick={() => friendIdChanger(friend.id)}>
          {friend.first_name} {friend.last_name}
        </p>
      ))}
    </div>
  );
}
