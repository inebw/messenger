import { useEffect, useState } from "react";

export default function useFetchAllUsers(url, id, refreshFriends) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${url}/users`, {
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setAllUsers(data.filter((user) => user.id !== id));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [refreshFriends]);

  return { loading, error, allUsers };
}
