import { ArrowDown, Sparkles } from 'lucide-react';

const Header = () => {
  return(
    <header className="relative min-h-[92vh] bg-[#760f14] text-[#fffaf0]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(244,194,81,0.28),transparent_30%),radial-gradient(circle_at_12%_82%,rgba(33,69,67,0.52),transparent_35%)]" />
      <div className="absolute -right-36 top-20 h-96 w-96 rounded-full border border-[#f4d276]/30 md:h-128 md:w-lg" />
      <div className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-[#f4d276]/20" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <span className="font-serif text-xl italic text-[#f4d276]">P &amp; V</span>
        <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#f8e9c2]">
          06 · 12 · 26
        </span>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1fr_0.85fr] lg:px-10 lg:pb-24 lg:pt-14">
        <div className="max-w-2xl">
          <p className="mb-7 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.28em] text-[#f4d276]">
            <Sparkles className="h-4 w-4" /> A celebration of love
          </p>
          <h1 className="font-serif text-6xl font-light leading-[0.94] tracking-tight sm:text-8xl lg:text-[8.5rem]">
            Philip
            <span className="block pl-12 text-[#f4d276]">&amp; Victoria</span>
          </h1>
          <p className="mt-9 max-w-md font-sans text-sm leading-7 text-[#f8e9c2] sm:text-base">
            Two hearts, one beautiful beginning. We would be honoured to have
            you with us as we say “I do”.
          </p>
          <a
            href="#details"
            className="mt-9 inline-flex items-center gap-3 border border-[#f4d276] px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-[#f4d276] transition hover:bg-[#f4d276] hover:text-[#760f14]"
          >
            Explore the day <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-3 rotate-3 border border-[#f4d276]/60" />
          <div className="relative overflow-hidden border-8 border-[#f4d276] bg-[#f4d276] shadow-2xl shadow-black/30">
            <img
              src="/images/philip-and-victoria.jpeg"
              alt="Philip and Victoria's wedding invitation"
              className="aspect-[0.72] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-7 -left-6 rounded-full bg-[#214543] px-6 py-4 font-serif text-lg italic text-[#f8e9c2] shadow-xl">
            Our forever starts here
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;