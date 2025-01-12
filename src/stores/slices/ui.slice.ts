import { StateCreator } from "zustand";

import { AppStore } from "../app.store";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface UIState {
  isLoading: boolean;
  theme: Theme;
  AppError: string | null;
}

export interface UISlice {
  ui: UIState;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setTheme: (theme: Theme) => void;
}

export const initializedUISlice: UIState = {
  isLoading: false,
  theme: Theme.Light,
  AppError: null,
};

export const createUISlice: StateCreator<
  AppStore,
  [["zustand/persist", unknown]],
  [],
  UISlice
> = (set, _) => ({
  ui: initializedUISlice,
  setTheme: (theme) =>
    set(
      (state) => ({
        ...state,
        ui: { ...state.ui, theme },
      }),
      false,
    ),
  setLoading: (isLoading) =>
    set(
      (state) => ({
        ...state,
        ui: { ...state.ui, isLoading },
      }),
      false,
    ),
  setError: (error) =>
    set(
      (state) => ({
        ...state,
        ui: { ...state.ui, AppError: error },
      }),
      false,
    ),
});
