import { useEffect, useState } from "react";

export default function useFetchChat(url, id, friendId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const resonse = await fetch(`${url}/messages/${id}/${friendId}`, {
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        });
        const data = await resonse.json();
        setChat(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchChat();
  }, [url, friendId]);

  return { loading, error, chat };
}
