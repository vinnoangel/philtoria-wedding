import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import {
  ArrowDown,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  ExternalLink,
  Heart,
  MapPin,
  Play,
  Quote,
  Sparkles,
} from 'lucide-react';

const YOUTUBE_STREAM_URL = 'https://youtube.com';
const TARGET_DATE = new Date('2026-12-06T09:00:00+01:00').getTime();
const WEDDING_DAY = new Date('2026-12-06T00:00:00+01:00').getTime();

const galleryImages = [
  { src: '/images/philip-1.jpeg', alt: 'Philip in a blue suit', className: 'lg:col-span-7 lg:row-span-2' },
  { src: '/images/victoria-1.jpeg', alt: 'Victoria smiling in a patterned dress', className: 'lg:col-span-5 lg:row-span-2' },
  { src: '/images/philip-2.jpeg', alt: 'Philip smiling for a portrait', className: 'lg:col-span-3' },
  { src: '/images/victoria-2.jpeg', alt: 'Victoria in a traditional look', className: 'lg:col-span-3' },
  { src: '/images/philip-3.jpeg', alt: 'Philip dressed for the celebration', className: 'lg:col-span-3' },
  { src: '/images/victoria-3.jpeg', alt: 'Victoria in an elegant portrait', className: 'lg:col-span-3' },
];

function getTimeLeft() {
  const distance = Math.max(TARGET_DATE - Date.now(), 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
    isLive: distance === 0,
    isWeddingDay: Date.now() >= WEDDING_DAY,
  };
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyLink = async () => {
    if (!timeLeft.isWeddingDay) return;
    await navigator.clipboard.writeText(YOUTUBE_STREAM_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <div className="min-h-screen overflow-hidden bg-[#fbf6ed] text-[#24352c] selection:bg-[#f1c96b] selection:text-[#6f1013]">
        <header className="relative min-h-[92vh] bg-[#760f14] text-[#fffaf0]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(244,194,81,0.28),transparent_30%),radial-gradient(circle_at_12%_82%,rgba(33,69,67,0.52),transparent_35%)]" />
          <div className="absolute -right-36 top-20 h-96 w-96 rounded-full border border-[#f4d276]/30 md:h-[32rem] md:w-[32rem]" />
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

        <main>
          <section className="relative bg-[#fbf6ed] px-6 py-20 lg:px-10 lg:py-28" id="details">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#a46a17]">The big day</p>
                <h2 className="mt-4 font-serif text-4xl font-light text-[#760f14] sm:text-6xl">
                  Join us in celebration
                </h2>
                <p className="mt-5 font-sans text-sm leading-7 text-[#657067]">
                  The families of Mr. Chima A. Chima &amp; Mrs. Patience Chima and
                  the late Mr. Polycarp Uwakwe &amp; Mrs. Jane Ngozi Uwakwe
                  cordially request the honour of your presence.
                </p>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-3">
                {[
                  { icon: CalendarDays, label: 'Sunday, 6 December 2026', title: 'The date' },
                  { icon: Clock3, label: '9:00 AM', title: 'The time' },
                  { icon: MapPin, label: 'Assemblies of God Church, 84 Ohanku Road, Aba', title: 'The place' },
                ].map(({ icon: Icon, label, title }) => (
                  <div key={title} className="border border-[#ddcda9] bg-[#fffdf8] p-8 text-center shadow-[0_12px_35px_rgba(118,15,20,0.05)]">
                    <Icon className="mx-auto h-6 w-6 text-[#b77b1c]" />
                    <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.25em] text-[#a46a17]">{title}</p>
                    <p className="mx-auto mt-3 max-w-xs font-serif text-xl leading-7 text-[#24352c]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

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
                    destined to walk life’s beautiful journey together.”
                  </p>
                </div>
              </div>
              <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:auto-rows-[210px] lg:grid-cols-12">
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

          <section className="bg-[#fffaf0] px-6 py-20 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-4xl border-y border-[#ddcda9] py-12 text-center">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#a46a17]">For friends near and far</p>
              <h2 className="mt-4 font-serif text-4xl font-light text-[#760f14] sm:text-5xl">Celebrate with us online</h2>
              <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-7 text-[#657067]">
                {timeLeft.isWeddingDay
                  ? 'The livestream is now available. Join us online, send your blessings, and celebrate every beautiful moment with us.'
                  : 'Can’t make it to Aba? The livestream link will be available here on the wedding day, 6 December 2026.'}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {timeLeft.isWeddingDay ? (
                  <a
                    href={YOUTUBE_STREAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#760f14] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#a31d21]"
                  >
                    <Play className="h-4 w-4 fill-current" /> Watch the livestream <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center justify-center gap-3 bg-[#d8cbb7] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#807363]">
                    <Clock3 className="h-4 w-4" /> Available on the wedding day
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  disabled={!timeLeft.isWeddingDay}
                  className="inline-flex items-center justify-center gap-3 border border-[#760f14] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#760f14] transition hover:bg-[#f3e8d2] disabled:cursor-not-allowed disabled:border-[#b9ad9c] disabled:text-[#998d7c] disabled:hover:bg-transparent"
                >
                  {timeLeft.isWeddingDay && copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {timeLeft.isWeddingDay && copied ? 'Link copied' : 'Copy stream link'}
                </button>
              </div>
            </div>
          </section>

          <section className="bg-[#f3e8d2] px-6 py-20 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-5xl text-center">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#a46a17]">A blessing for our new home</p>
              <h2 className="mt-4 font-serif text-4xl font-light text-[#760f14] sm:text-5xl">
                Support the couple
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-7 text-[#657067]">
                Your prayers, presence, and kind gifts mean the world to us. If you
                would like to support our wedding, you may use either of the accounts
                below.
              </p>
              <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
                <div className="border border-[#ddcda9] bg-[#fffaf0] p-7 shadow-[0_12px_35px_rgba(118,15,20,0.05)] sm:p-9">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#a46a17]">Groom</p>
                  <h3 className="mt-3 font-serif text-2xl text-[#760f14]">Philip Eberechi Chima</h3>
                  <div className="mt-6 space-y-3 font-sans text-sm text-[#657067]">
                    <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Account number</span><strong className="mt-1 block text-lg tracking-[0.12em] text-[#24352c]">3050669841</strong></p>
                    <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Bank</span><strong className="mt-1 block text-lg text-[#24352c]">FirstBank</strong></p>
                  </div>
                </div>
                <div className="border border-[#ddcda9] bg-[#fffaf0] p-7 shadow-[0_12px_35px_rgba(118,15,20,0.05)] sm:p-9">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#a46a17]">Bride</p>
                  <h3 className="mt-3 font-serif text-2xl text-[#760f14]">Victoria Uwakwe Chidinma</h3>
                  <div className="mt-6 space-y-3 font-sans text-sm text-[#657067]">
                    <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Account number</span><strong className="mt-1 block text-lg tracking-[0.12em] text-[#24352c]">813 522 6484</strong></p>
                    <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Bank</span><strong className="mt-1 block text-lg text-[#24352c]">Opay</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#760f14] px-6 py-12 text-center text-[#f8e9c2]">
          <p className="font-serif text-4xl italic">Philip &amp; Victoria</p>
          <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.3em]">Philtoria Wedding IV · 2026</p>
          <p className="mt-6 inline-flex items-center gap-2 font-sans text-xs text-[#e5c779]">
            Made with <Heart className="h-3.5 w-3.5 fill-current" /> and joy
          </p>
        </footer>
      </div>
      <Analytics/>
    </>
  );
}
