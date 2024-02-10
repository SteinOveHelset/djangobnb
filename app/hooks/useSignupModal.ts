import { create } from "zustand";

interface SignupModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useSignupModal = create<SignupModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useSignupModal;