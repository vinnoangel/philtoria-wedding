import {
  Check,
  Clock3,
  Copy,
  ExternalLink, 
  Play, 
} from 'lucide-react';

const Streaming = (props) => {
  const { link, copied, handleCopyLink, timeLeft } = props
  return(
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
              href={link}
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
  )
}

export default Streaming;