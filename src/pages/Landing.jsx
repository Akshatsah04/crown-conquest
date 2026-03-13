import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { GiCrownedHeart, GiSpikedDragonHead } from 'react-icons/gi'
import Navbar from '../components/Navbar'
import EventInfo from '../components/EventInfo'
import Rules from '../components/Rules'
import Footer from '../components/Footer'

function Landing() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location.hash])



  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
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