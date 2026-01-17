import UserSpace from "./UserSpace";

export default function Header({ user, setUser }) {
  return (
    <header className="flex justify-between relative">
      <h1 className="text-3xl font-bold">Rizzle</h1>
      <UserSpace user={user} setUser={setUser} />
    </header>
  );
}
