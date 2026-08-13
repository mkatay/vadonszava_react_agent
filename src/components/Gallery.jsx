import data from '../data.json'

const galleryImages = [
  '/images/gallery/gallery01.jpg',
  '/images/gallery/gallery02.jpg',
  '/images/gallery/gallery03.jpg',
  '/images/gallery/gallery04.jpg',
  '/images/gallery/gallery05.jpg',
]

export const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-tura-green-600">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Túráim képekben...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={image}
              src={image}
              className={index === 3 ? 'border border-white dark:border-tura-green-700 object-cover h-full w-full row-start-1 row-end-3 sepia-100 scale-100 hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000' : 'border border-white dark:border-tura-green-700 object-cover h-full sepia-100 scale-100 hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000'}
              alt={data.gallery[index] || `Túrafotó ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

