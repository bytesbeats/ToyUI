import { StateCreator } from "zustand";

import { AppStore } from "../app.store";

export interface UIState {
  isLoading: boolean;
  AppError: string | null;
}

export interface UISlice {
  ui: UIState;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const createUISlice: StateCreator<
  AppStore,
  [["zustand/devtools", never]],
  [["zustand/persist", unknown]],
  UISlice
> = (set, _) => ({
  ui: { isLoading: false, AppError: null },
  setLoading: (isLoading) =>
    set(
      (state) => ({
        ...state,
        ui: { ...state.ui, isLoading },
      }),
      false,
      "setLoading"
    ),
  setError: (error) =>
    set(
      (state) => ({
        ...state,
        ui: { ...state.ui, AppError: error },
      }),
      false,
      "setError"
    ),
});
