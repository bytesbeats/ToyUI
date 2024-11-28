import { AppStore } from "@stores/app.store";
import { StateCreator } from "zustand";

export interface UserState {
  id?: string;
  username?: string;
  nickname?: string;
  avatar?: string;
  name?: string;
  email?: string;
  phone?: string;
  isLogged: boolean;
}

export interface UserSlice {
  user?: UserState | null;
  setUser: (user: UserState) => void;
  isLoggedIn: () => boolean;
}

export const createUserSlice: StateCreator<
  AppStore,
  [["zustand/devtools", never]],
  [["zustand/persist", unknown]],
  UserSlice
> = (set, get) => ({
  isLogged: false,
  user: undefined,
  setUser: (user: UserState) =>
    set((state) => ({ ...state, user: { ...state.user, ...user } }), false, "setUser"),
  isLoggedIn: () => get().user?.isLogged || false,
});
