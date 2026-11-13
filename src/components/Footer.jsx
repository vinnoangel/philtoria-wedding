const Footer = () => {
  return(
    <footer className="bg-[#760f14] px-6 py-12 text-center text-[#f8e9c2]">
      <p className="font-serif text-4xl italic">Philip &amp; Victoria</p>
      <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.3em]">Philtoria Wedding IV · 2026</p>
      <p className="mt-6 inline-flex items-center gap-2 font-sans text-xs text-[#e5c779]">
        Copyright © 2026{' '}
        <a 
          href="https://redjic.com" // Replace with the actual URL of Redjic Limited
          target="_blank" 
          rel="noopener noreferrer"
          className="underline font-bold text-[#f2ecec] hover:text-stone-700 transition-colors duration-200"
        >
          Redjic Limited
        </a> All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;