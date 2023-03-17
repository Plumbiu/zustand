import { create } from 'zustand'

interface IPerson {
  name: string
  age: number
  increase: () => void
}

const usePersonStore = create<IPerson>()((set) => ({
  name: 'xj',
  age: 18,
  increase: () => {    
    set((state: any) => ({ age: state.age + 1 }))
  }
}))

export const usePersonName = () => usePersonStore(state => state.name)
export const usePersonAge = () => usePersonStore(state => state.age)
export const usePersonIncrease = () => usePersonStore(state => state.increase)
