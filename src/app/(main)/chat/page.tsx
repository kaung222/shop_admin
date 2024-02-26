"use client";

import Link from "next/link";

const chatlist = [
  {
    senderId: 1,
    recepientId: 2,
    roomId: 12345,
  },
  {
    senderId: 2,
    recepientId: 23,
    roomId: 12346789,
  },
];
const Page = () => {
  return (
    <div className=" space-y-2 p-5">
      <Link href={"/chat/create"}>create new</Link>
      {chatlist.map((chat) => {
        return (
          <Link
            href={`/chat/${chat.roomId}`}
            key={chat.roomId}
            className=" mt-3 block"
          >
            <div className="bg-slate-100 p-3 rounded-md w-full">
              {chat.senderId} and {chat.recepientId} roomId : {chat.roomId}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
