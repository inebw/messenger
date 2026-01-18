import { useContext, useState } from "react";
import Header from "./components/Header";
import { UrlContext } from "./utils/UrlContext";
import Unauthorized from "./components/Unauthorized";
import useFetchUser from "./utils/useFetchUser";
import Authorized from "./components/Authorized";

function App() {
  const url = useContext(UrlContext);
  const [theme, setTheme] = useState("");
  const { loading, error, user, setUser, socket } = useFetchUser(url);

  const themeChange = () => {
    if (theme === "dark") setTheme("");
    else setTheme("dark");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`${theme} h-[95vh] lg:p-5 lg:m-5 border rounded-md bg-bg dark:bg-dbg text-fg dark:text-dfg font-display`}
    >
      <UrlContext value={url}>
        <Header
          user={user}
          setUser={setUser}
          themeChange={themeChange}
          theme={theme}
        />
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
