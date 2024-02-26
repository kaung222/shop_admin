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

export const storeItemToLocalStorage = (key: string, value: any): boolean => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  return false;
};

export const truncateText = (text: string, limit: number) => {
  const truncateText = text.slice(0, limit);
  if (text.length > limit) return truncateText + " ...";
  return truncateText;
};
