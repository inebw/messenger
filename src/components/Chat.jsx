import { useContext } from "react";
import { UrlContext } from "../utils/UrlContext";
import useFetchChat from "../utils/useFetchChat";

export default function Chat({ id, friendId, socket }) {
  const url = useContext(UrlContext);
  const { loading, error, chat } = useFetchChat(url, id, friendId, socket);

  if (!friendId) return <p>Waiting for friend Id</p>;

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="border">
      {chat && chat.map((message) => <p>{message.message}</p>)}
    </div>
  );
}
