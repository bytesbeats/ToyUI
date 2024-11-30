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

export const initializedUser: UserState = {
  isLogged: false,
};

export const createUserSlice: StateCreator<
  AppStore,
  [["zustand/persist", unknown]],
  [],
  UserSlice
> = (set, get) => ({
  user: initializedUser,
  setUser: (user: UserState) =>
    set((state) => ({ ...state, user: { ...state.user, ...user } }), false),
  isLoggedIn: () => get().user?.isLogged || false,
});
