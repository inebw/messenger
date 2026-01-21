import empty from "./../assets/empty.png";

export default function ChatZero() {
  return (
    <div className="gap-3 sm:flex w-full h-[88vh] lg:h-[84vh] rounded-md lg:p-5 p-2 dark:bg-secondary bg-dsecondary ">
      <div className="flex items-center flex-col justify-center w-full">
        <img src={empty} alt="people-chatting" />
        <p className="font-bold text-xl">It's empty out here!</p>
      </div>
    </div>
  );
}
