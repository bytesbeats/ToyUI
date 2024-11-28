import { Locales } from "@locales/next-i18next.config";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import {
  createSettingsSlice,
  Settings,
  SettingsSlice,
  Theme,
} from "./slices/settings.slice";
import { createUISlice, UISlice } from "./slices/ui.slice";
import { createUserSlice, UserSlice } from "./slices/user.slice";

// ------------------------STATE------------------------------------
type RootState = {
  isInitialized: boolean;
};

// ------------------------ACTIONS------------------------------------
export type RootActions = {
  logout: () => void;
  reset: () => void;
  initialization: (initialSettings: AppStoreInitialize) => void;
};

// 全局状态类型
export type AppStore = UserSlice & SettingsSlice & UISlice & RootState & RootActions;

export type AppStoreInitialize = Pick<
  AppStore,
  "user" | "settings" | "ui" | "isInitialized"
>;

// 初始化状态
const initialState: AppStoreInitialize = {
  user: { isLogged: false },
  settings: { theme: Theme.Light, language: Locales.EN },
  ui: { isLoading: false, AppError: null },
  isInitialized: false,
};

// store
export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set, get, action) => {
        return {
          ...initialState,
          // UI Slice
          ...createUISlice(set, get, action),
          // Settings Slice
          ...createSettingsSlice(set, get, action),
          // User Slice
          ...createUserSlice(set, get, action),
          // Root Slice
          reset: () => set(initialState, false, "reset"),
          initialization: (initialSettings: Partial<Settings>) =>
            set(
              (state) => ({
                ...state,
                settings: { ...state.settings, ...initialSettings },
                isInitialized: true,
              }),
              false,
              "initialization"
            ),
          logout: () =>
            set(
              () => ({
                user: { isLogged: false },
              }),
              false,
              "logout"
            ),
        };
      },
      {
        name: "cuit-kit-app-storage",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state): Partial<AppStore> => ({
          settings: state.settings,
          user: state.user,
          ui: state.ui,
          isInitialized: state.isInitialized || false,
        }),
      }
    ),
    {
      name: "AppStore",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);
