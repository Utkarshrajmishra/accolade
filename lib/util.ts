import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inpusts: ClassValue[]){
    return twMerge(clsx(inpusts))
}

export const getCurrentDate = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};