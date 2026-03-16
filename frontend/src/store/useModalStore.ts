import { create } from 'zustand'

type ModalState = {

  idEditTeam: string | null;
  isAddingTeam: boolean;
  setIdEditTeam: (id: string | null) => void;
  setIsAddingTeam: (value: boolean) => void;
  toggleIsAddingTeam: () => void;

  idEditMatch: string | null;
  isAddingMatch: boolean;
  setIdEditMatch: (id: string | null) => void;
  setIsAddingMatch: (value: boolean) => void;
  toggleIsAddingMatch: () => void;

  idEditPlayer: string | null;
  isAddingPlayer: boolean;
  setIdEditPlayer: (id: string | null) => void;
  setIsAddingPlayer: (value: boolean) => void;
  toggleIsAddingPlayer: () => void;
}

const useModalStore = create<ModalState>((set) => ({

  idEditTeam: null,
  isAddingTeam: false,

  setIdEditTeam: (id) => set({ idEditTeam: id, isAddingTeam: false }),

  setIsAddingTeam: (value) => set({ isAddingTeam: value, idEditTeam: null }),
  toggleIsAddingTeam: () => set((state) => ({ isAddingTeam: !state.isAddingTeam, idEditTeam: null })),

  idEditMatch: null,
  isAddingMatch: false,
  setIdEditMatch: (id) => set({ idEditMatch: id, isAddingMatch: false }),
  setIsAddingMatch: (value) => set({ isAddingMatch: value, idEditMatch: null }),
  toggleIsAddingMatch: () => set((state) => ({ isAddingMatch: !state.isAddingMatch, idEditMatch: null })),

  idEditPlayer: null,
  isAddingPlayer: false,
  setIdEditPlayer: (id) => set({ idEditPlayer: id, isAddingPlayer: false }),
  setIsAddingPlayer: (value) => set({ isAddingPlayer: value, idEditPlayer: null }),
  toggleIsAddingPlayer: () => set((state) => ({ isAddingPlayer: !state.isAddingPlayer, idEditPlayer: null })),
}))

export default useModalStore