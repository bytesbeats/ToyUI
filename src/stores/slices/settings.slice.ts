import { Locales } from "@locales/next-i18next.config";
import { AppStore } from "@stores/app.store";
import { StateCreator } from "zustand";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface Settings {
  theme: Theme;
  language: Locales;
}

export interface SettingsSlice {
  settings: Settings;
  upgradeSettings: (newSettings: Partial<Settings>) => void;
}

export const createSettingsSlice: StateCreator<
  AppStore,
  [["zustand/devtools", never]],
  [["zustand/persist", unknown]],
  SettingsSlice
> = (set) => ({
  settings: {
    theme: Theme.Light,
    language: Locales.EN,
  },
  upgradeSettings: (newSettings: Partial<Settings>) =>
    set(
      (state) => ({
        settings: { ...state.settings, ...newSettings },
      }),
      false,
      "upgradeSettings"
    ),
});
