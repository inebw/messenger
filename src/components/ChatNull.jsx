import chatImg from "./../assets/chat.png";

export default function ChatNull() {
  return (
    <div className="box-3d gap-3 hidden sm:flex justify-center items-center w-full sm:w-[70%] h-[88vh] lg:h-[84vh] rounded-md lg:p-5 p-2 dark:bg-secondary bg-dsecondary ">
      <div className="flex items-center flex-col justify-center">
        <img src={chatImg} alt="people-chatting" />
        <p className="font-bold text-xl">Tap on friend to start chatting!</p>
      </div>
    </div>
  );
}
