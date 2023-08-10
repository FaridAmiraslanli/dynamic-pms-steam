import { create } from "zustand";

export const researchStore = create((set) => ({
  readyResearches: ["Apex Legends", "God of War", "CS:GO"],
}));
