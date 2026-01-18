import { useEffect, useState } from "react";

export default function useFetchChat(url, id, friendId, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        socket.emit("join_room", `${id}-${friendId}`);
        socket.on("getMessage", (data) => {
          setChat(data);
        });
        socket.emit("getMyMessage", { id, friendId });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchChat();
    return () => {
      socket.emit("leave_room", `${id}-${friendId}`);
    };
  }, [url, friendId, socket]);

  return { loading, error, chat };
}
