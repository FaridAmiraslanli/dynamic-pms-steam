import {create} from "zustand"

export const userStore = create(set => ({
    authKey: null,
    setAuthKey: (key) => set((state) => ({authKey: key})),
})) 
