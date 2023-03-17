import { create } from 'zustand'

export const usePersonStore = create((set) => ({
  name: 'xj',
  age: 18,
  increase: () => {    
    set((state: any) => ({ age: state.age + 1 }))
  }
}))