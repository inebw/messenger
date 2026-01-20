export default function RegisterMessage({ errors, msg, toggleRegister }) {
  if (msg === "loading")
    return (
      <div className="flex items-center justify-center h-24">
        <div className="loader"></div>
      </div>
    );
  if (errors)
    return (
      <div className="bub-3d p-5 rounded-md bg-red flex flex-col animate-pulse">
        {errors.map((error) => (
          <div key={error.msg}>
            <p>{error.msg}</p>
          </div>
        ))}
      </div>
    );

  return (
    <button onClick={toggleRegister} className="btn-cd bg-green">
      {msg.msg}
    </button>
  );
}
