import { useContext } from "react";
import { UrlContext } from "../utils/UrlContext";
import useFetchChat from "../utils/useFetchChat";
import { format } from "date-fns";
import ChatSkeleton from "../skelton/ChatSkeleton";
import ChatZero from "./ChatZero";

export default function Chat({ id, friendId, socket }) {
  const url = useContext(UrlContext);
  const { loading, error, chat } = useFetchChat(url, id, friendId, socket);

  if (!friendId) return <p>Waiting for friend Id</p>;

  if (loading) return <ChatSkeleton />;

  if (error) return <p>{error.message}</p>;

  if (chat.length === 0) return <ChatZero />;

  return (
    <div className="p-2 flex flex-col-reverse gap-3 overflow-scroll no-scrollbar mt-auto">
      {chat &&
        chat.map((message) => (
          <div className="">
            {message.senderId === id && (
              <div className="bub-3d rounded-2xl rounded-tl-none w-72 p-5 ml-auto bg-bg1 dark:bg-dbg1 space-y-2">
                <p>{message.message}</p>
                <p className="text-xs text-fg1 dark:text-dfg1">
                  {format(message.timestamp, "PPp")}
                </p>
              </div>
            )}
            {message.senderId !== id && (
              <div className="bub-3d rounded-2xl rounded-br-none w-72 p-5 bg-bg2 dark:bg-dbg2 space-y-2">
                <p>{message.message}</p>
                <p className="text-xs text-fg1 dark:text-dfg1">
                  {format(message.timestamp, "PPp")}
                </p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
