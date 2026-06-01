import { useEffect } from 'react'
import Lenis from 'lenis'
import Home from './pages/Home'
import CursorGlow from './components/ui/CursorGlow'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <CursorGlow />
      <Home />
    </div>
  )
}

export default App
