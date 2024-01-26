"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/store/providers/ReactQueryProvider";
import ReduxProvider from "@/store/providers/ReduxProvider";

const layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <ReduxProvider>
        <ReactQueryProvider>
          <div className=" dark:bg-gray-800 dark:text-white">
            <div className="flex h-screen">
              <Sidebar />
              <div className="w-full">
                <Navbar />
                {props.children}
              </div>
            </div>
          </div>
          <Toaster />
        </ReactQueryProvider>
      </ReduxProvider>
    </div>
  );
};

export default layout;
