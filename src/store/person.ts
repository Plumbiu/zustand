import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
const myMiddleware = (f: any, name: string): any => devtools(persist(f, { name }))

interface IPerson {
  name: string
  age: number
  increase: () => void
}

const usePersonStore = create<IPerson>()(
  myMiddleware((set: any) => ({
    name: 'xj',
    age: 18,
    increase: () => set((state: IPerson) => ({ age: state.age + 1 }))
  }), 'person')
)

export const usePersonName = () => usePersonStore(state => state.name)
export const usePersonAge = () => usePersonStore(state => state.age)
export const usePersonIncrease = () => usePersonStore(state => state.increase)
