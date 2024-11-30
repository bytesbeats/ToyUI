"use client";
import { Locales, Localization } from "@locales/next-i18next.config";
import { useShallow } from "zustand/shallow";

import { AppStoreInitialize, useAppStore } from "./app.store";

type useLanguageParams = [
  Locales,
  Localization,
  ({ language }: { language: Locales }) => void
];
type useInitializedPrams = [
  boolean | undefined,
  (appInitialState: AppStoreInitialize) => void
];

// User
export const useUser = () => useAppStore((state) => state.user);

// Settings
export const useSettings = () => useAppStore((state) => state.settings);

// UI
export const useLoading = () => useAppStore((state) => state.ui.isLoading);

// Upgrade Language
export const useUpdateLanguage = (language: Locales) =>
  useAppStore((state) => state.upgradeSettings({ language }));

// Theme
export const useTheme = () => useAppStore((state) => state.ui.theme);

// Localizations
export const useLocalizations = () =>
  useAppStore(useShallow((state) => state.settings.localizations));

// Language set & get
export const useLanguage = (): useLanguageParams =>
  useAppStore(
    useShallow((state) => [
      state.settings.language,
      state.settings.localizations,
      state.upgradeSettings,
    ])
  );

// Initialized
export const useInitialized = (): useInitializedPrams =>
  useAppStore(useShallow((state) => [state.isInitialized, state.initialization]));
