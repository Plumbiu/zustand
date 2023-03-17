import Person from "./components/Person"
import { usePersonIncrease } from './store/person'
const App = () => {
  const increase = usePersonIncrease()
  return (
    <div>
      <Person />
      <button onClick={increase}>age++</button>
    </div>
  )
}

export default App