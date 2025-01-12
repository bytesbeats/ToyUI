import { getLocalizations } from "@locales/localization";
import { create } from "zustand";
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";

import {
  SettingsSlice,
  createSettingsSlice,
  initializedSettings,
} from "./slices/settings.slice";
import { UISlice, createUISlice, initializedUISlice } from "./slices/ui.slice";
import {
  UserSlice,
  createUserSlice,
  initializedUser,
} from "./slices/user.slice";

// ------------------------STATE------------------------------------
type RootState = {
  isInitialized?: boolean | undefined;
};

// ------------------------ACTIONS------------------------------------
export type RootActions = {
  logout: () => void;
  reset: () => void;
  initialization: (appInitialState: AppStoreInitialize) => void;
};

// 全局状态类型
export type AppStore = UserSlice &
  SettingsSlice &
  UISlice &
  RootState &
  RootActions;

export type AppStoreInitialize = Pick<AppStore, "user" | "settings" | "ui">;

// 初始化状态
export const appInitialState: AppStoreInitialize = {
  ui: initializedUISlice,
  user: initializedUser,
  settings: initializedSettings,
};
// store
export const useAppStore = create<AppStore>()(
  subscribeWithSelector(
    persist(
      (set, get, store) => {
        return {
          ...appInitialState,
          // UI Slice
          ...createUISlice(set, get, store),
          // Settings Slice
          ...createSettingsSlice(set, get, store),
          // User Slice
          ...createUserSlice(set, get, store),
          // Root Slice
          reset: () =>
            set(() => ({ ...appInitialState, isInitialized: false }), false),
          initialization: (appInitState: AppStoreInitialize) =>
            set(
              (state) => ({
                ...state,
                ...appInitState,
                isInitialized: true,
              }),
              false,
            ),
          logout: () =>
            set(
              () => ({
                user: { isLogged: false },
              }),
              false,
            ),
        };
      },
      {
        name: "cuit-kit-app-storage",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (stage): Partial<AppStore> => ({
          settings: stage.settings,
          user: stage.user,
          ui: stage.ui,
          isInitialized: stage.isInitialized,
        }),
      },
    ),
  ),
);

useAppStore.subscribe(
  (state) => state.settings,
  async ({ language }, { language: prevLanguage }) => {
    if (language !== prevLanguage) {
      const localization = await getLocalizations(language);
      useAppStore.getState().upgradeSettings({
        localizations: localization,
      });
    }
  },
);
