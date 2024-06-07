import { create } from "zustand";

export const useDataStore = create((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
