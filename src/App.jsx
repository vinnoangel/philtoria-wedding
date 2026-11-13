import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header'
import EventDetails from './components/EventDetails'
import Countdown from './components/Countdown'
import Couple from './components/Couple'
import Streaming from './components/Streaming'
import Support from './components/Support'
import Footer from './components/Footer'

const YOUTUBE_STREAM_URL = '';
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
        <Header />

        <main>
          <EventDetails />
          <Countdown timeLeft={timeLeft} />
          <Couple galleryImages={galleryImages} />
          <Streaming 
            link={YOUTUBE_STREAM_URL} 
            copied={copied} 
            handleCopyLink={handleCopyLink}
            timeLeft={timeLeft}
          />
          <Support />
        </main>

        <Footer />
      </div>
      <Analytics/>
    </>
  );
}
