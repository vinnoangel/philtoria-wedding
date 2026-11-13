import {
  CalendarDays,
  Clock3,
  MapPin,
} from 'lucide-react';

const EventDetails = () => {
  return(
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
  )
}

export default EventDetails;