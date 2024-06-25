import { create } from "zustand"

type ExistModelState = {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const useExitModel = create<ExistModelState>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({isOpen: false}),
}))