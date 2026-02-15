import { useState, useEffect } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleLoad = () => setVisible(false)
    if (document.readyState === 'complete') {
      setVisible(false)
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!visible) return null

  return (
    <div id="preloader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
