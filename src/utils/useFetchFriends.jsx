import { useEffect, useState } from "react";

export default function useFetchFriends(url, id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resonse = await fetch(`${url}/friends/${id}`, {
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        });
        const data = await resonse.json();
        setFriends(data);
      } catch (error) {
        setFriends(null);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  return { loading, error, friends };
}
