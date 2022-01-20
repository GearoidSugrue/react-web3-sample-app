import './App.css'

import Home from './components/Home'
import Install from './components/Install'

function App() {
  const view = (window as any).ethereum ? <Home /> : <Install />

  return (
    <div className="App">
      <header className="App-header">
        {view}
      </header>
    </div >
  )
}

export default App
