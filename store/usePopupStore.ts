import { create } from "zustand";

type PopupState = {
  [key: string]: boolean;
};

type PopupStore = {
  popups: PopupState;
  openPopup: (popupName: string) => void;
  closePopup: (popupName: string) => void;
  togglePopup: (popupName: string) => void;
  isPopupOpen: (popupName: string) => boolean;
};

export const usePopupStore = create<PopupStore>((set, get) => ({
  popups: {},

  openPopup: (popupName: string) =>
    set((state) => ({
      popups: { ...state.popups, [popupName]: true },
    })),

  closePopup: (popupName: string) =>
    set((state) => ({
      popups: { ...state.popups, [popupName]: false },
    })),

  togglePopup: (popupName: string) => {
    const isOpen = get().popups[popupName] || false;
    set((state) => ({
      popups: { ...state.popups, [popupName]: !isOpen },
    }));
  },

  isPopupOpen: (popupName: string) => get().popups[popupName] || false,
}));