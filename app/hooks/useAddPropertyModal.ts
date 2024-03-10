import { create } from "zustand";

interface AddPropertyModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useAddPropertyModal = create<AddPropertyModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useAddPropertyModal;