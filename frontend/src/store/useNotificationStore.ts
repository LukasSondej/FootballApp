import { create } from "zustand";
type notificationState = {
    notificationMessage: string | null;
    showNotification: (value: string) => void;
    clearNotification: () => void
}
export const useNotificationStore = create<notificationState>((set) => ({


       notificationMessage: null,
    showNotification: (value) => set({notificationMessage: value}),
    clearNotification: () => set({notificationMessage: null})


}))
 
