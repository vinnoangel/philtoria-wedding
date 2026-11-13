const Countdown = ({ timeLeft }) => {
  return(
    <section className="bg-[#214543] px-6 py-20 text-[#fffaf0] lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#f4d276]">Until we say I do</p>
          <h2 className="mt-4 font-serif text-5xl font-light leading-tight sm:text-6xl">
            The countdown is on
          </h2>
          <p className="mt-6 max-w-md font-sans text-sm leading-7 text-[#d9e1d8]">
            Save the date, share the joy, and get ready for a day filled with
            faith, family, laughter, and a lifetime of memories.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {[
            ['days', timeLeft.days],
            ['hours', timeLeft.hours],
            ['minutes', timeLeft.minutes],
            ['seconds', timeLeft.seconds],
          ].map(([label, value]) => (
            <div key={label} className="border border-[#f4d276]/50 px-2 py-5 text-center sm:px-5 sm:py-7">
              <strong className="block font-serif text-3xl font-light text-[#f4d276] sm:text-5xl">
                {String(value).padStart(2, '0')}
              </strong>
              <span className="mt-2 block font-sans text-[9px] uppercase tracking-[0.2em] text-[#d9e1d8] sm:text-[10px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countdown;