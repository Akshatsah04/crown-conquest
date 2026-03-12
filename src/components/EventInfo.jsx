import { GiBattleAxe, GiCrownedHeart, GiHealthPotion, GiPuzzle } from 'react-icons/gi'
import { HiCalendarDays, HiClock, HiTicket } from 'react-icons/hi2'
import { IoPeople } from 'react-icons/io5'

const eventModes = [
  {
    title: 'Puzzle Phase',
    description: 'Solve arena puzzles to gain route control, recover HP, and unlock tactical boosts.',
    icon: GiPuzzle,
  },
  {
    title: 'Battle Phase',
    description: 'Contest zones, pressure rivals, and protect your active lineup during open conflict.',
    icon: GiBattleAxe,
  },
  {
    title: 'Crown Defense',
    description: 'The ruling team must survive focused attacks while holding the crown for points.',
    icon: GiCrownedHeart,
  },
  {
    title: 'HP System',
    description: 'HP swings through success and penalties, making every choice visible on the dashboard.',
    icon: GiHealthPotion,
  },
]

const eventStats = [
  { label: 'Date', value: '13 March', icon: HiCalendarDays },
  { label: 'Time', value: '12:30PM – 2PM', icon: HiClock },
  { label: 'Team Size', value: '1–4 Players', icon: IoPeople },
  { label: 'Entry Fee', value: '₹50', icon: HiTicket },
  { label: 'Prize Pool', value: '₹1500', icon: GiCrownedHeart },
]

function EventInfo() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="grid gap-6 sm:gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-6 sm:p-8">
          <p className="text-[0.7rem] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.28em] text-slate-400">Event Description</p>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white lg:text-4xl">What Is Crown Conquest?</h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed sm:leading-8 text-slate-300">
            Crown Conquest blends puzzle solving, HP management, and crown control into a competitive fantasy showdown. The experience is designed so spectators can understand standings, pressure, and momentum at a glance.
          </p>

          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
            {eventModes.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-2.5 sm:p-3 text-xl sm:text-2xl text-[#D4AF37] shrink-0">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed sm:leading-6 text-slate-300">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel p-6 sm:p-8">
          <p className="text-[0.7rem] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.28em] text-slate-400">Event Details</p>
          <div className="mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            {eventStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4 shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 text-[#D4AF37]">
                  <item.icon className="text-base sm:text-lg" />
                  <p className="text-xs sm:text-sm text-slate-400">{item.label}</p>
                </div>
                <p className="mt-1.5 sm:mt-2 text-base sm:text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventInfo