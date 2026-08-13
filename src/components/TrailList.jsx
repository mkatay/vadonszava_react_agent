import data from '../data.json'

const trailImages = {
  1: 'images/istallosko.jpg',
  2: 'images/kekesteto.jpg',
  3: 'images/nagymilic.jpg',
}

const levelClass = {
  Könnyű: 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200',
  Nehéz: 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200',
}

export const TrailList = () => {
  return (
    <section id="utvonalak" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-heading">Kedvenc útvonalaim</h2>
          <a href="#" className="text-tura-green-600 font-semibold flex items-center gap-1">
            Összes megtekintése →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.routes.map((route) => (
            <article key={route.id} className="group bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border transform hover:-translate-y-2 transition duration-300">
              <img src={trailImages[route.id]} alt={route.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-tag-bg text-tag-text rounded-full text-xs font-medium">{route.location}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelClass[route.difficulty]}`}>{route.difficulty}</span>
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{route.title}</h3>
                <p className="text-text mb-4 line-clamp-2">{route.description}</p>
                <div className="flex justify-between items-center text-sm text-text border-t border-card-border pt-4">
                  <span>🕒 {Math.floor(route.durationMinutes / 60)}:{String(route.durationMinutes % 60).padStart(2, '0')} óra</span>
                  <span>📏 {route.distanceKm} km</span>
                  <span>⬆️ {route.ascentM} m</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

