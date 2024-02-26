"use client";

import { apiClient } from "@/api/apiClient";
import FormInput from "@/components/commons/FormInput";
import { InputBox } from "@/components/commons/Input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn, getItemFromLocalStorage } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Socket, io } from "socket.io-client";
type messageProps = {
  senderId: string;
  message: string;
  isAcked: false;
};
type TypingProps = { id: string; name: string } | null;
type DetailProps = {
  params: {
    chatId: string;
  };
};
const Page = ({ params }: DetailProps) => {
  const chatId = params.chatId;
  const form = useForm();
  const [messages, setMessages] = useState<messageProps[]>([]);
  const [socket, setSocket] = useState<Socket>();
  const [typing, setTyping] = useState<TypingProps>(null);
  const scrollRef = useRef(null);
  const user = getItemFromLocalStorage("user");
  socket?.on("recieveMessage", (data: messageProps) => {
    setMessages([...messages, data]);
  });
  socket?.on("typing", (data: TypingProps) => {
    console.log(data);
    setTyping(data);
  });
  socket?.on("join-room", (data) => {
    console.log(data);
  });

  const handleSendMessage = async (values: any) => {
    const payload = {
      ...values,
      // isAcked: false,
      senderId: "jammes",
      recipientId: "tommy",
      roomId: chatId,
    };
    const res = await apiClient.post("chat/send-message", payload);
    setTyping(null);
  };
  const handleTyping = () => {
    socket?.emit("typing", { id: "123", name: "james" });
  };
  useEffect(() => {
    const socket = io("http://localhost:8080", { autoConnect: true });
    setSocket(socket);
    if (socket) {
      socket.emit("join-room", {
        members: ["james", "tommy"],
        roomId: chatId,
      });
    }
  }, []);
  useEffect(() => {
    if (scrollRef.current) {
      //@ts-expect-error
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className=" ">
      <Link href={"/chat"} className=" bg-slate-300 p-4">
        Back
      </Link>
      <div className="p-3 h-[400px] overflow-y-auto border border-slate-400">
        {typing && <p>{typing?.name} is typing</p>}
        {messages?.map((message, index) => {
          return (
            <div className="" key={index}>
              <p
                className={cn(
                  "p-2",
                  message.senderId === user.id ? "text-end" : " "
                )}
                ref={scrollRef}
              >
                {message.message}
              </p>
            </div>
          );
        })}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSendMessage)}
          className="flex items-center justify-center"
        >
          <Input
            type="text"
            placeholder="Message"
            {...form.register("message")}
            onKeyDown={handleTyping}
          />
          <Button className="">Send</Button>
        </form>
      </Form>
      {/* <button onClick={handleJoinRoom}>Join room</button> */}
    </div>
  );
};

export default Page;
