import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

export default function useFetchUser(url) {
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
        socket.emit("join_room", data.id);
        setUser(data);
      } catch (error) {
        setUser(null);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { loading, error, user, setUser, socket };
}
