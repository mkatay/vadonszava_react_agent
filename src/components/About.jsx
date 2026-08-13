export const About = () => {
  return (
    <section id="rolam" className="py-24 bg-tura-green-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/images/profilkep.png" alt="A blogger" className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square" />
          </div>
          <div>
            <div>
              <span className="text-tura-green-600 dark:text-tura-green-100 font-semibold mb-2 block">A történetem</span>
              <h2 className="text-4xl font-bold text-heading mb-6">Szia, a hegyek szerelmese vagyok.</h2>
              <p className="text-lg text-text mb-6 leading-relaxed dark:text-gray-500">
                Tíz éve kezdődött minden, amikor egy nehéz munkahét után véletlenül kötöttem ki a Pilisben.
                Azóta a hétvégéim a természetben telnek. Ez a blog azért jött létre, hogy megosszam veled azokat
                a rejtett helyeket, hasznos tippeket és élményeket, amiket az utam során gyűjtöttem.
              </p>
              <p className="text-lg text-text mb-10 leading-relaxed">
                Célom, hogy inspiráljalak, és megmutassam: a túrázás nem csak a profiké, hanem bárkié, aki
                tiszteli a természetet és szereti a szabadságot.
              </p>
              <a href="mailto:info@vadonszava.hu" className="px-8 py-3 bg-tura-green-600 dark:bg-tura-brown-600 text-white font-semibold rounded-lg">
                Lépj kapcsolatba
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

