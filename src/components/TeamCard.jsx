import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'
import HPBar from './HPBar'
import PlayerCard from './PlayerCard'

function TeamCard({ teamName, jewels, totalHP, maxHP, players, isOpen, onToggle, icon }) {
  const activePlayers = players.filter((player) => player.status === 'active').length
  const jewelSlots = Array.from({ length: 4 })

  return (
    <article className="panel overflow-hidden p-4 sm:p-5 transition-transform duration-200 hover:-translate-y-1">
      <button type="button" className="w-full text-left" onClick={onToggle}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-4">
            <div className="order-2 sm:order-1 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-2xl sm:text-3xl ring-1 ring-[#D4AF37]/20 shrink-0">
              {icon}
            </div>
            <div className="order-1 sm:order-2 flex-col">
              <div className="flex items-center gap-1.5 mb-1.5 w-24 sm:w-32">
                {jewelSlots.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 sm:h-2 flex-1 rounded-[1px] transition-all duration-300 ${
                      i < jewels
                        ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                        : 'bg-slate-800'
                    }`}
                  />
                ))}
              </div>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white break-words">{teamName}</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-400">{activePlayers} active players</p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-4 text-sm text-slate-300 mt-2 lg:mt-0">
            <div className="w-full sm:min-w-32 flex-1">
              <HPBar hpValue={totalHP} maxHP={maxHP} label="Total HP" />
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-black/20 p-2 text-xl text-[#D4AF37]">
              {isOpen ? <HiChevronUp /> : <HiChevronDown />}
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2 xl:grid-cols-4">
              {players.map((player) => (
                <PlayerCard key={player.id} {...player} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default TeamCard