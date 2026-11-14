const Support = () => {
  return(
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
              <p><span className="text-sm uppercase tracking-wider text-[#a46a17]"><strong>Naira Account</strong></span></p>
              <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Account number</span><strong className="mt-1 block text-lg tracking-[0.12em] text-[#24352c]">3050669841</strong></p>
              <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Bank</span><strong className="mt-1 block text-lg text-[#24352c]">First Bank</strong></p>
            </div>
            <hr className="mt-6 border-gray-200 dark:border-gray-800" />
            <div className="mt-6 space-y-3 font-sans text-sm text-[#657067]">
              <p><span className="text-sm uppercase tracking-wider text-[#a46a17]"><strong>Euro Account</strong></span></p>
              <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">IBAN</span><strong className="mt-1 block text-lg tracking-[0.12em] text-[#24352c]">LT423250017909739619</strong></p>
              <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Bank</span><strong className="mt-1 block text-lg text-[#24352c]">Revolut</strong></p>
              <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Click <a href="http://revolut.me/philipt2is" target="_blank" className="text-[#760f14]">here</a> to donate</span></p>
            </div>
          </div>
          <div className="border border-[#ddcda9] bg-[#fffaf0] p-7 shadow-[0_12px_35px_rgba(118,15,20,0.05)] sm:p-9">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#a46a17]">Bride</p>
            <h3 className="mt-3 font-serif text-2xl text-[#760f14]">Victoria Chidinma Uwakwe</h3>
            <div className="mt-6 space-y-3 font-sans text-sm text-[#657067]">
              <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Account number</span><strong className="mt-1 block text-lg tracking-[0.12em] text-[#24352c]">813 522 6484</strong></p>
              <p><span className="text-xs uppercase tracking-wider text-[#a46a17]">Bank</span><strong className="mt-1 block text-lg text-[#24352c]">Opay</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support;