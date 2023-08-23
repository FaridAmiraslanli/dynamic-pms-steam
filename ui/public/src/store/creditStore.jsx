import {create} from "zustand"

export const creditStore = create(set => ({
    credits: 0,
    addCredits: (credit) => set((state) => ({credits: state.credits + credit})),
    spendCredits: (credit) => set((state) => ({credits: state.credits - credit})),
})) 
