"use client";

import { Locales, Localization } from "@locales/next-i18next.config";
import { useCallback, useEffect } from "react";
import { isNullish, isTruthy } from "remeda";

import { appInitialState, AppStoreInitialize } from "./app.store";
import { useInitialized } from "./hooks";

export default function StoreInitializer({
  localization,
  lang,
}: {
  localization: Localization;
  lang: Locales;
}) {
  const [isInitialized, upgradeInitialization] = useInitialized();

  const bootstrap = useCallback(async () => {
    const initialState: AppStoreInitialize = {
      ...appInitialState,
      settings: {
        language: lang,
        localizations: localization,
      },
    };
    if (!isTruthy(isInitialized)) {
      upgradeInitialization(initialState);
    }
  }, [isInitialized, lang, localization, upgradeInitialization]);

  useEffect(() => {
    console.log("bootstrap", isInitialized);
    if (!isNullish(isInitialized)) {
      bootstrap();
    }
  }, [bootstrap, isInitialized]);

  return null;
}
