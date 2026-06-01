import { useEffect } from 'react'

const CursorGlow = () => {
  useEffect(() => {
    const root = document.documentElement
    let rafId = 0
    let latestX = window.innerWidth / 2
    let latestY = window.innerHeight / 2

    const update = () => {
      root.style.setProperty('--cursor-x', `${latestX}px`)
      root.style.setProperty('--cursor-y', `${latestY}px`)
      rafId = 0
    }

    const handleMove = (event) => {
      latestX = event.clientX
      latestY = event.clientY
      if (!rafId) {
        rafId = requestAnimationFrame(update)
      }
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}

export default CursorGlow
