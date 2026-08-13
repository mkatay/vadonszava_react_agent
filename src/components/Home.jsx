import data from '../data.json'

const benefitIcons = [
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1a2.5 2.5 0 002.5-2.5V4a2 2 0 00-2-2h-1.036" />
  </svg>,
]

export const Home = () => {
  return (
    <>
      <section id="kezdolap" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('images/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Az út nem csak célhoz vezet, hanem
            <span className="text-tura-green-100"> önmagadhoz is.</span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fedezd fel a vadont, szívd be a friss hegyi levegőt, és hagyd magad mögött a mindennapok zaját. A túrázás nem sport, hanem visszatérés a gyökereinkhez.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#utvonalak" className="px-10 py-4 bg-tura-green-600 text-white font-semibold rounded-lg text-lg shadow-lg hover:bg-tura-green-700 transition duration-300">
              Fedezz fel útvonalakat
            </a>
            <a href="#felszereles" className="px-10 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-lg text-lg backdrop-blur-sm">
              Mire van szükséged?
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-tinted">
        <div className="max-w-7xl mx-auto px-6 lg:px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heading mb-4">Miért a túrázás a legjobb kikapcsolódás?</h2>
            <p className="text-lg text-text max-w-2xl mx-auto">Több mint testmozgás. A természetben töltött idő megváltoztatja a gondolkodásodat.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {data.benefits.map((benefit, index) => (
              <FeatureCard
                key={benefit.title}
                icon={benefitIcons[index]}
                title={benefit.title}
                text={benefit.text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-white dark:bg-tura-green-700/50 p-8 rounded-2xl shadow-xl border border-border text-center">
    <div className="w-16 h-16 bg-tura-green-600 dark:bg-tura-brown-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-tura-brown-900 dark:text-tura-brown-100 mb-3">{title}</h3>
    <p className="text-text">{text}</p>
  </div>
)

