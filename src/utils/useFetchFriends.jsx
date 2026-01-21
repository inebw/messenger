import { useEffect, useState } from "react";

export default function useFetchFriends(url, id, refreshFriends, socket) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        setLoading(true);
        socket.emit("postFriends", id);
        socket.on("imOnline", (data) => {
          socket.emit("postFriends", id);
        });
        socket.on("imOffline", (data) => {
          socket.emit("postFriends", id);
        });
        socket.on("getFriends", (data) => {
          setFriends(data);
          setLoading(false);
        });
      } catch (error) {
        setFriends(null);
        setError(error);
      }
    };
    fetchFriends();
  }, [refreshFriends, socket]);

  return { loading, error, friends };
}
