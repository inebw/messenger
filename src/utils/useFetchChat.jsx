import { useEffect, useState } from "react";

export default function useFetchChat(url, id, friendId, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        socket.on("getMessage", (data) => {
          setChat(data);
        });
        socket.emit("postMessage", { id, friendId, message: null });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchChat();
  }, [url, friendId, socket]);

  return { loading, error, chat };
}
