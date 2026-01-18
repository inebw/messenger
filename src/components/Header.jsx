import Toggle from "./Toggle";
import UserSpace from "./UserSpace";

export default function Header({ user, setUser, themeChange, theme }) {
  return (
    <header className="flex justify-between relative border">
      <h1 className="text-3xl font-bold">Rizzle</h1>
      <div className="flex gap-5">
        <Toggle themeChange={themeChange} theme={theme} />
        <UserSpace user={user} setUser={setUser} />
      </div>
    </header>
  );
}
