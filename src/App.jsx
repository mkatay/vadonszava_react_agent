import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { MyNavbar } from './components/MyNavbar'
import { MyFooter } from './components/MyFooter'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <MyNavbar isDark={isDark} setIsDark={setIsDark} />
      <main className="flex-1">
        <Outlet />
      </main>
      <MyFooter isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default App
