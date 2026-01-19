import Logo from "../assets/Logo";
import Toggle from "./Toggle";
import UserSpace from "./UserSpace";

export default function Header({
  user,
  setUser,
  themeChange,
  theme,
  toggleRegister,
  register,
  socket,
}) {
  return (
    <header className="flex flex-col p-2 md:flex-row md:justify-between items-center relative box-3d md:rounded-md lg:p-5 lg:mb-5 md:p-2 md:m-2 dark:bg-secondary bg-dsecondary">
      <div className="flex gap-2 items-center justify-center">
        <Logo className={"w-[1.8rem]"} />
        <h1 className="text-4xl tracking-widest font-bold font-fett">Sermo</h1>
      </div>
      <div className="flex gap-5 items-center">
        <Toggle themeChange={themeChange} theme={theme} />
        <UserSpace
          user={user}
          setUser={setUser}
          toggleRegister={toggleRegister}
          register={register}
          socket={socket}
        />
      </div>
    </header>
  );
}
