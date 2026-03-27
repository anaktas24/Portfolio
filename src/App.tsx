import Scene from './components/Scene'
import HUD from './components/ui/HUD'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000008' }}>
      <Scene />
      <HUD />
    </div>
  )
}
