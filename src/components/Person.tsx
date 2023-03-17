import { usePersonStore } from '../store/person'

const Person = () => {
  const { age, name } = usePersonStore() as { age: number; name: string }
  return (
    <div>
      <div> age: {age}</div>
      <div> name: {name}</div>
    </div>
  )
}

export default Person