import { useContext } from "react";
import Header from "./components/Header";
import { UrlContext } from "./utils/UrlContext";
import Unauthorized from "./components/Unauthorized";
import useFetchUser from "./utils/useFetchUser";
import Authorized from "./components/Authorized";

function App() {
  const url = useContext(UrlContext);
  const { loading, error, user, setUser, socket } = useFetchUser(url);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="h-screen">
      <UrlContext value={url}>
        <Header />
        {user ? (
          <Authorized id={user.id} socket={socket} />
        ) : (
          <Unauthorized user={user} setUser={setUser} />
        )}
      </UrlContext>
    </div>
  );
}

export default App;
