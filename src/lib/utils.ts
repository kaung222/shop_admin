import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getItemFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const value = JSON.parse(localStorage.getItem(key)!);
    return value;
  }
};
