import { useContext, useState } from "react";
import Header from "./components/Header";
import { UrlContext } from "./utils/UrlContext";
import Unauthorized from "./components/Unauthorized";
import useFetchUser from "./utils/useFetchUser";
import Authorized from "./components/Authorized";

function App() {
  const url = useContext(UrlContext);
  const [theme, setTheme] = useState("");
  const [register, setRegister] = useState(true);
  const [refreshUser, setRefreshUser] = useState(0);
  const { loading, error, user, setUser, socket } = useFetchUser(
    url,
    refreshUser,
  );

  const toggleRefreshUser = () => {
    setRefreshUser((prev) => prev + 1);
  };

  const themeChange = () => {
    if (theme === "dark") setTheme("");
    else setTheme("dark");
  };

  const toggleRegister = () => {
    setRegister((prev) => !prev);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`${theme}  min-h-[100vh] p-2 lg:p-5 lg:ml-[10%] lg:mr-[10%] md:p-2 md:rounded-md bg-bg dark:bg-dbg text-fg dark:text-dfg font-display flex flex-col`}
    >
      <UrlContext value={url}>
        <Header
          user={user}
          setUser={setUser}
          themeChange={themeChange}
          theme={theme}
          toggleRegister={toggleRegister}
          register={register}
          socket={socket}
        />
        {user ? (
          <Authorized id={user.id} socket={socket} />
        ) : (
          <Unauthorized
            user={user}
            setUser={setUser}
            register={register}
            toggleRefreshUser={toggleRefreshUser}
          />
        )}
      </UrlContext>
    </div>
  );
}

export default App;
