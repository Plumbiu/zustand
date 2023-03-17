import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
interface IPerson {
  name: string
  age: number
  increase: () => void
}

const usePersonStore = create<IPerson>()(
  devtools(
    persist((set) => ({
      name: 'xj',
      age: 18,
      increase: () => set((state) => ({ age: state.age + 1 }))
    }), { name: 'person' })
  )
)

export const usePersonName = () => usePersonStore(state => state.name)
export const usePersonAge = () => usePersonStore(state => state.age)
export const usePersonIncrease = () => usePersonStore(state => state.increase)
