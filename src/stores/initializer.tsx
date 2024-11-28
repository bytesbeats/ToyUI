"use client";
/**
 * @name StoreInitializer
 * @author ZiCun.guo
 * @description Initialize the store
 * ```
 *   # This file is used to initialize the store and the database
 * ```
 */
import { Locales } from "@locales/next-i18next.config";
import { useEffect, useState } from "react";
import { createRxDatabase, RxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";

import { useInitialized } from "./hooks";

/**
 * @name initializeDataBase
 * @description create the database and collections
 *
 */
const initializeDB = async () => {
  const dbDexie = await createRxDatabase({
    name: "cuit-kit-app-database",
    storage: getRxStorageDexie(),
  });
  console.debug("🐛🐛🐛 ::: dbDexie:::", dbDexie.collections);
  return dbDexie;
};

export default function StoreInitializer({ lang }: { lang: Locales }) {
  const [isInitialized, initialization] = useInitialized();
  const [database, setDataBase] = useState<RxDatabase>();

  useEffect(() => {
    console.debug("🐛🐛🐛 ::: isInitialized:::", isInitialized);
    initializeDB().then((db) => {
      console.debug("🐛🐛🐛 ::: db:::", db);
    });
  });

  return null;
}
