export const MyFooter = () => {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-nav-bg border-t border-border text-text">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div>
          <a href="#" className="text-lg font-bold text-tura-green-700 dark:text-tura-green-100">
            <span>Vadon<span className="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
          </a>
          <a href="#" className="text-sm mx-1 hover:text-hover-text">Facebook</a>
          <a href="#" className="text-sm mx-1 hover:text-hover-text">Instagram</a>
          <a href="#" className="text-sm mx-1 hover:text-hover-text">Strava</a>
        </div>
      </div>
      <p className="max-w-7xl mx-auto text-sm">© 2026 Minden jog fenntartva.</p>
    </footer>
  )
}
