import { Locales, Localization } from "@locales/next-i18next.config";
import { AppStore } from "@stores/app.store";
import { StateCreator } from "zustand";

export interface Settings {
  language: Locales;
  localizations: Localization;
}

export interface SettingsSlice {
  settings: Settings;
  upgradeSettings: (newSettings: Partial<Settings>) => void;
}

export const initializedSettings: Settings = {
  language: Locales.EN,
  localizations: {},
};

export const createSettingsSlice: StateCreator<
  AppStore,
  [["zustand/persist", unknown]],
  [],
  SettingsSlice
> = (set) => ({
  settings: initializedSettings,
  upgradeSettings: (newSettings: Partial<Settings>) =>
    set(
      (state) => ({
        settings: { ...state.settings, ...newSettings },
      }),
      false
    ),
});
