import { create } from "zustand";

export const researchStore = create((set) => ({
  readyResearches: ["Apex Legends", "God of War", "CS:GO"],
  setReadyResearches: (newResearch) =>
    set((state) => ({
      readyResearches: [...state.readyResearches, newResearch],
    })),
  progressResearches: [],
  setProgressResearches: (newResearch) =>
    set((state) => ({
      progressResearches: [...state.progressResearches, newResearch],
    })),
  removeProgressResearch: (research) =>
    set((state) => ({
      progressResearches: [...state.progressResearches].filter(
        (res) => res !== research
      ),
    })),
  lastResearch: {},
  setLastResearch: (research) =>
    set((state) => ({ lastResearch: { ...research } })),
  // resetLastResearch: () =>
  //   set((state) => ({ lastResearch: {  } })),
}));
