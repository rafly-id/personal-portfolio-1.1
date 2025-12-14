import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getWhatsAppLink = (message: string = "Halo Rafly") => {
  const phoneNumber = "6285974111131";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
