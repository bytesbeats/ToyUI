"use client";
import { usePathname } from "next/navigation";

export const useCurrentLanguage = (): string => {
  const pathname = usePathname();
  return pathname.split("/")[1]; // 假设语言代码是路径的第一部分
};
