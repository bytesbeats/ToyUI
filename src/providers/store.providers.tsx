"use client";
import { AppStore, useAppStore } from "@stores/app.store";
import { createContext, useState } from "react";

/**
 * @name State Providers
 * @author ZiCun.guo
 * @description 提供全局状态管理
 * @param children - 渲染内容
 * @returns <Provider {...store}>{children}</Provider>
 */
export interface StoreProvidersProps {
  children: React.ReactNode;
}

// Store类型 后续可以保持继续添加
export type StoreContextType = AppStore | null;

// Context 上下文
export const StoreContext = createContext<StoreContextType>(null);

// Provider
export const StoreProviders = ({ children }: StoreProvidersProps) => {
  const [store] = useState<StoreContextType>(useAppStore());
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
