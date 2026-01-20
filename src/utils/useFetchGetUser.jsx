import { useEffect, useState } from "react";

export default function useFetchGetUser(url, id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}/users/user/${id}`, {
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchUsers();
  }, [id]);

  return { loading, error, user };
}
