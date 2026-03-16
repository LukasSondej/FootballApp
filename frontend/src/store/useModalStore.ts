import { create } from 'zustand'
type ModalState ={
idEditTeam: string | null;
isAddingTeam: boolean;
 setIdEditTeam: (id: string | null) =>void
 setIsAddingTeam: (value: boolean) => void
toggleIsAddingTeam: () => void


idEditMatch: string | null;
  isAddingMatch: boolean;
  setIdEditMatch: (id: string | null) => void;
  setIsAddingMatch: (value: boolean) => void;
  toggleIsAddingMatch: () => void;

  idEditPlayer:  string | null;
  setIdEditPlayer: (id: string | null) => void;

  isAddingPlayer: boolean;
setIsAddingPlayer: (value: boolean) => void
toggleIsAddingPlayer: () => void;
}
const useModalStore = create<ModalState>((set) => ({
  idEditTeam: null,
  isAddingTeam: false,

  idEditMatch: null,
  isAddingMatch: false,

  idEditPlayer: null,
  isAddingPlayer: false,
  setIdEditPlayer: (id) => set({idEditPlayer: id}),
  setIsAddingPlayer: (value) => set({ isAddingPlayer: value }),
  toggleIsAddingPlayer: () => set((state) => ({ isAddingPlayer: !state.isAddingPlayer })),

  setIdEditMatch: (id) => set({idEditMatch: id}),
  setIsAddingMatch: (value) => set({isAddingMatch: value}),
  toggleIsAddingMatch: () => set((state) => ({isAddingMatch: !state.isAddingMatch})),

  setIdEditTeam: (id) => set({idEditTeam: id}),
  setIsAddingTeam: (value) => set({isAddingTeam: value}),
 toggleIsAddingTeam: () => set((state) => ({isAddingTeam: !state.isAddingTeam}))



}))
export default useModalStore