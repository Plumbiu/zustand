import Person from "./components/Person"
import { usePersonStore } from './store/person'
const App = () => {
  const { increase } = usePersonStore()
  return (
    <div>
      <Person />
      <button onClick={increase}>age++</button>
    </div>
  )
}

export default App