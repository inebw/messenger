import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("https://messenger-api.inebw.online");

export default function useFetchUser(url, refreshUser) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resonse = await fetch(`${url}/login/protected`, {
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        });

        const data = await resonse.json();
        socket.emit("online", data.id);
        setUser(data);
      } catch (error) {
        setUser(null);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [refreshUser]);

  return { loading, error, user, setUser, socket };
}
