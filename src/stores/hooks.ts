import { Locales } from "@locales/next-i18next.config";
import { useShallow } from "zustand/shallow";

import { useAppStore } from "./app.store";

type useLanguageParams = [Locales, (language: Locales) => void];

// User
export const useUser = () => useAppStore((state) => state.user);

// Settings
export const useSettings = () => useAppStore((state) => state.settings);

// UI
export const useLoading = () => useAppStore((state) => state.ui.isLoading);

// Upgrade Language
export const useUpdateLanguage = (language: Locales) =>
  useAppStore(useShallow((state) => state.upgradeSettings({ language })));

// Theme
export const useTheme = () => useAppStore((state) => state.settings.theme);

// Language set & get
export const useLanguage = (): useLanguageParams =>
  useAppStore(useShallow((state) => [state.settings.language, useUpdateLanguage]));

// Initialized
export const useInitialized = () =>
  useAppStore(useShallow((state) => [state.isInitialized, state.initialization]));
