import { useContext } from "react";
import { UrlContext } from "../utils/UrlContext";
import useFetchChat from "../utils/useFetchChat";

export default function Chat({ id, friendId }) {
  const url = useContext(UrlContext);
  const { loading, error, chat } = useFetchChat(url, id, friendId);

  if (!friendId) return <p>Waiting for friend Id</p>;

  if (loading) return <p>Loading ...</p>;

  return <div>{chat && chat.map((message) => <p>{message.message}</p>)}</div>;
}
