import { Quote } from 'lucide-react'; 

const Couple = ({ galleryImages }) => {
  return(
    <section className="bg-[#f3e8d2] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-8">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#a46a17]">A little look at us</p>
          <h2 className="mt-4 font-serif text-5xl font-light leading-tight text-[#760f14] sm:text-6xl">
            Made for each other
          </h2>
          <div className="mt-8 flex gap-4 border-l-2 border-[#b77b1c] pl-5 text-[#657067]">
            <Quote className="mt-1 h-5 w-5 shrink-0 text-[#b77b1c]" />
            <p className="font-serif text-lg italic leading-8">
              “Two hearts brought together by love, united by faith, and
              destined to walk life's beautiful journey together.”
            </p>
          </div>
        </div>
        <div className="grid auto-rows-45 grid-cols-2 gap-4 sm:auto-rows-60 lg:auto-rows-52.5 lg:grid-cols-12">
          {galleryImages.map((image) => (
            <div key={image.src} className={`group overflow-hidden ${image.className ?? ''}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Couple;