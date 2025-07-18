import { create } from "zustand";

type ModalState = {
  [key: string]: boolean;
};

type ModalStore = {
  modals: ModalState;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  toggleModal: (modalName: string) => void;
  isModalOpen: (modalName: string) => boolean;
};

export const useModalStore = create<ModalStore>((set, get) => ({
  modals: {},

  openModal: (modalName: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: true },
    })),

  closeModal: (modalName: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: false },
    })),

  toggleModal: (modalName: string) => {
    const isOpen = get().modals[modalName] || false;
    set((state) => ({
      modals: { ...state.modals, [modalName]: !isOpen },
    }));
  },

  isModalOpen: (modalName: string) => get().modals[modalName] || false,
}));