import { useEffect, useState } from "react";

export default function useFetchFriends(url, id, refreshFriends, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        socket.emit("postFriends", id);
        socket.on("imOnline", (data) => {
          socket.emit("postFriends", id);
        });
        socket.on("imOffline", (data) => {
          socket.emit("postFriends", id);
        });
        socket.on("getFriends", (data) => {
          setFriends(data);
        });
      } catch (error) {
        setFriends(null);
        setError(error);
      } finally {
        if (!friends) setLoading(false);
      }
    };
    fetchFriends();
  }, [refreshFriends, socket]);

  return { loading, error, friends };
}
