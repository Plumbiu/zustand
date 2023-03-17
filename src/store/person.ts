import { create } from 'zustand'

interface IPerson {
  name: string
  age: number
  increase: () => void
}

export const usePersonStore = create<IPerson>()((set) => ({
  name: 'xj',
  age: 18,
  increase: () => {    
    set((state: any) => ({ age: state.age + 1 }))
  }
}))