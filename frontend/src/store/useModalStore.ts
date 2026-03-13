import { create } from 'zustand'
type ModalState ={
idEditTeam: string | null;
isAdding: boolean
 setIdEditTeam: (id: string | null) =>void
setIsAdding: (value: boolean) => void
toggleIsAdding: () => void;
}
const useModalStore = create<ModalState>((set) => ({
  idEditTeam: null,
  isAdding: false,

  setIdEditTeam: (id) => set({idEditTeam: id}),
  setIsAdding: (value) => set({isAdding: value}),
 toggleIsAdding: () => set((state) => ({isAdding: !state.isAdding}))
}))
export default useModalStore