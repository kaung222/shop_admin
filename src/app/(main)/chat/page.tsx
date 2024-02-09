"use client";

import { apiClient } from "@/api/apiClient";
import FormInput from "@/components/commons/FormInput";
import { InputBox } from "@/components/commons/Input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Socket, io } from "socket.io-client";
type messageProps = {
  senderId: string;
  message: string;
  isAcked: false;
};
const Page = () => {
  const form = useForm();
  const [messages, setMessages] = useState<messageProps[]>([]);
  const [socket, setSocket] = useState<Socket>();
  const scrollRef = useRef(null);
  const { id } = JSON.parse(localStorage.getItem("user")!);
  socket?.on("recieveMessage", (data: messageProps) => {
    setMessages([...messages, data]);
  });
  const handleSendMessage = async (values: any) => {
    const payload = { ...values, senderId: id, isAcked: false };
    const res = await apiClient.post("chat", payload);
    console.log(res);
  };
  console.log(messages);

  useEffect(() => {
    const socket = io("http://localhost:8080", { autoConnect: true });
    setSocket(socket);
  }, []);
  useEffect(() => {
    if (scrollRef.current) {
      //@ts-expect-error
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className=" p-5 w-[400px]">
      <div className=" h-[400px] overflow-y-auto border border-slate-400">
        {messages?.map((message, index) => {
          return (
            <p
              key={index}
              className={cn("p-2", message.senderId === id ? "text-end" : " ")}
              ref={scrollRef}
            >
              {message.message}
            </p>
          );
        })}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSendMessage)}
          className="flex items-center justify-center"
        >
          <FormInput
            name="message"
            placeholder="Message"
            type="text"
            form={form}
          />
          <Button className="">Send</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
