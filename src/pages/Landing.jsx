import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import { GiCrownedHeart, GiSpikedDragonHead } from 'react-icons/gi'
import Navbar from '../components/Navbar'
import EventInfo from '../components/EventInfo'
import Rules from '../components/Rules'
import Footer from '../components/Footer'

function Landing({ skipIntro = false }) {
  const [hasEntered, setHasEntered] = useState(skipIntro)
  const location = useLocation()

  useEffect(() => {
    if (skipIntro) {
      setHasEntered(true)
    }
  }, [skipIntro])

  useEffect(() => {
    if (hasEntered && location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [hasEntered, location.hash])

  const sigils = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: `sigil-${i}`,
        size: 7 + (i % 5),
        top: 8 + ((i * 11) % 82),
        left: 5 + ((i * 13) % 90),
        delay: (i % 6) * 0.55,
        duration: 3.8 + (i % 4) * 0.9,
      })),
    [],
  )

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {!hasEntered && (
          <motion.section
            key="crown-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
            className="intro-stage fixed inset-0 z-50 overflow-hidden"
          >
            <div className="intro-halo intro-halo-1" />
            <div className="intro-halo intro-halo-2" />
            <div className="intro-grid" />
            {sigils.map((sigil) => (
              <span
                key={sigil.id}
                className="intro-sigil"
                style={{
                  top: `${sigil.top}%`,
                  left: `${sigil.left}%`,
                  width: `${sigil.size}px`,
                  height: `${sigil.size}px`,
                  animationDelay: `${sigil.delay}s`,
                  animationDuration: `${sigil.duration}s`,
                }}
              />
            ))}

            <motion.div
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="section-shell relative flex min-h-screen items-center justify-center p-4"
            >
              <div className="intro-hero relative w-full max-w-6xl text-center">
                <div className="intro-orbit mx-auto flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <GiCrownedHeart className="crown-pulse text-3xl sm:text-4xl lg:text-5xl" />
                </div>
                <p className="mt-4 sm:mt-6 text-[0.6rem] sm:text-xs lg:text-sm uppercase tracking-[0.3em] sm:tracking-[0.42em] text-[#D4AF37]/80">
                  The Arena Awakens
                </p>
                <h1 className="font-cinzel mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9.5rem] font-black uppercase leading-[0.92] tracking-[0.05em] sm:tracking-[0.1em] lg:tracking-[0.14em] text-white">
                  <span className="block">Crown</span>
                  <span className="block">Conquest</span>
                </h1>
                <p className="mx-auto mt-4 sm:mt-7 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-slate-300">
                  Enter the war room of empires. Claim the crown, monitor every strike, and witness strategy unfold in real time.
                </p>
                <div className="mx-auto mt-4 sm:mt-5 flex max-w-2xl flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 text-[0.6rem] sm:text-[0.72rem] uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#D4AF37]/78">
                  <span>Royal Broadcast</span>
                  <span className="hidden h-1 w-1 rounded-full bg-[#D4AF37]/65 sm:block" />
                  <span className="text-slate-200/90">Live Spectator Feed</span>
                  <span className="hidden h-1 w-1 rounded-full bg-[#D4AF37]/65 sm:block" />
                  <span>Battle Protocol</span>
                  <span className="hidden h-1 w-1 rounded-full bg-[#D4AF37]/65 sm:block" />
                  <span className="text-slate-200/90 hidden sm:inline">Command Interface Ready</span>
                </div>
                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 text-[0.65rem] sm:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.24em] text-slate-300/90">
                  {['Crown Live', 'HP Telemetry', 'Battle Phases'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#D4AF37]/25 bg-black/25 px-3 py-1.5 sm:px-4 sm:py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8 sm:mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setHasEntered(true)}
                    className="rounded-full bg-[#D4AF37] px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-[#0B0F1A] transition-transform duration-200 hover:scale-[1.03]"
                  >
                    Enter Crown Conquest
                  </button>
                </div>
                <div className="intro-divider mx-auto mt-6 sm:mt-10 h-px w-full max-w-2xl" />
                <div className="mt-4 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-slate-400">Press Enter To Begin</div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {hasEntered && <Navbar />}

      <main className={hasEntered ? 'landing-open' : 'landing-locked'}>
        <section className="section-shell relative overflow-hidden py-16 sm:py-20 lg:py-28">
          <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_60%)] blur-3xl" />
          <GiSpikedDragonHead className="dragon-float absolute -right-8 top-10 -z-10 text-[16rem] sm:text-[20rem] lg:text-[24rem] text-white/5" />

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#D4AF37]">Fantasy Event Dashboard</p>
              <h1 className="font-cinzel mt-4 sm:mt-6 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[0.05em] sm:tracking-[0.08em] text-white break-words">
                CROWN CONQUEST
              </h1>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl font-medium text-[#D4AF37]">Strategy. Survival. Supremacy.</p>
              <p className="mx-auto lg:mx-0 mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-300">
                Track crown ownership, team standings, individual HP, and battle progress through a competitive control-panel experience inspired by fantasy strategy games.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col justify-center lg:justify-start gap-4 sm:flex-row">
                <Link
                  to="/dashboard"
                  className="rounded-full bg-[#D4AF37] px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base text-center font-semibold text-[#0B0F1A] transition-transform duration-200 hover:scale-[1.02]"
                >
                  View Battle Dashboard
                </Link>
                <a
                  href="#event-overview"
                  className="rounded-full border border-white/15 px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base text-center font-semibold text-white transition-colors duration-200 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                >
                  View Event Brief
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="panel relative overflow-hidden p-6 sm:p-8"
            >
              <div className="absolute right-6 top-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#D4AF37]/15 blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_45%)]" />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Battle Snapshot</p>
                <div className="mt-6 rounded-[2rem] border border-[#D4AF37]/20 bg-[linear-gradient(180deg,rgba(212,175,55,0.12),rgba(255,255,255,0.02))] p-6 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <GiCrownedHeart className="crown-pulse text-5xl" />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-white">Live Crown Control</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Spectators can instantly see who holds the crown, how much HP each team has left, and which players are active, recovering, or eliminated.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {[
                      ['Teams', '10'],
                      ['Battle Phases', '3'],
                      ['Live Log', 'Active'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm text-slate-400">{label}</p>
                        <p className="mt-2 text-xl font-bold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="event-overview">
          <EventInfo />
        </div>
        <Rules />
      </main>

      <Footer />
    </div>
  )
}

export default Landing