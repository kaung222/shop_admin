"use client";

import { redirect } from "next/navigation";

const Page = () => {
  const access_token = true;
  // typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  if (!access_token) return redirect("/login");
  return redirect("/dashboard");
};

export default Page;
