import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inpusts: ClassValue[]){
    return twMerge(clsx(inpusts))
}