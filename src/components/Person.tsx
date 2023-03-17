import { usePersonAge, usePersonName } from '../store/person'

const Person = () => {
  const age = usePersonAge()
  const name = usePersonName()
  return (
    <div>
      <div> age: {age}</div>
      <div> name: {name}</div>
    </div>
  )
}

export default Person