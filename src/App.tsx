import { useState } from 'react'
import './App.css'

function App({children}) {
  const [count, setCount] = useState(0)
  const handleIncrementCount = () => {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="App">
      {children}
      <p id="counterLabel">contador: {count}</p>
      <button  id="counterIncrement" onClick={handleIncrementCount}>Aumentar contador</button>
    </div>
  )
}

export default App
