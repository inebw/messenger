import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { UrlContext } from "./utils/UrlContext";
import Unauthorized from "./components/Unauthorized";
import useFetchUser from "./utils/useFetchUser";
import Authorized from "./components/Authorized";

function App() {
  const url = useContext(UrlContext);
  const [theme, setTheme] = useState("dark");
  const [register, setRegister] = useState(false);
  const [refreshUser, setRefreshUser] = useState(0);
  const { loading, error, user, setUser, socket } = useFetchUser(
    url,
    refreshUser,
  );

  useEffect(() => {
    const currTheme = window.localStorage.getItem("theme");
    if (currTheme && currTheme === "dark") setTheme("dark");
  });

  const toggleRefreshUser = () => {
    setRefreshUser((prev) => prev + 1);
  };

  const themeChange = () => {
    if (theme === "dark") {
      setTheme("");
      window.localStorage.setItem("theme", "");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    }
  };

  const toggleRegister = () => {
    setRegister((prev) => !prev);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={`${theme} bg-bg dark:bg-dbg`}>
      <div
        className={` min-h-[100vh] gap-3 p-2 sm:p-5 lg:ml-[10%] lg:mr-[10%] text-fg dark:text-dfg font-display flex flex-col`}
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
              toggleRegister={toggleRegister}
              toggleRefreshUser={toggleRefreshUser}
              socket={socket}
            />
          )}
        </UrlContext>
      </div>
    </div>
  );
}

export default App;
