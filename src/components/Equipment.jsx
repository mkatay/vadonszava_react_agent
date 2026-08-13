import data from '../data.json'

const equipmentIcons = ['🧤', '☀️', '🧭', '⚡', '💧']

export const Equipment = () => {
  return (
    <section id="felszereles" className="py-24 bg-tura-brown-900 dark:bg-tura-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" fill="currentColor" className="absolute -top-10 -left-10 w-64 h-64">
          <path d="M50 0 L100 80 H0 Z" />
        </svg>
        <svg viewBox="0 0 100 100" fill="currentColor" className="absolute -bottom-10 -right-10 w-96 h-96">
          <path d="M50 0 L100 80 H0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">A biztonságos túrázás alapjai</h2>
          <p className="text-lg text-tura-brown-100 max-w-2xl mx-auto">Sose indulj el felkészületlenül. Íme az 5 legfontosabb dolog, ami mindig legyen nálad.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center backdrop-blur-sm">
          {data.equipment.map((item, index) => (
            <div key={item.name} className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900 text-2xl">
                {equipmentIcons[index]}
              </div>
              <h4 className="font-semibold text-white">{item.name}</h4>
              <p className="text-xs text-tura-brown-100">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

