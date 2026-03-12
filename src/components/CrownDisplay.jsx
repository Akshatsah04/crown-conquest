import { motion } from 'framer-motion'
import { GiCrownedSkull, GiSpikedDragonHead } from 'react-icons/gi'
import HPBar from './HPBar'

function CrownDisplay({ teamName, jewels, totalHP, maxHP, players, icon }) {
  if (!teamName) {
    return (
      <section className="panel overflow-hidden p-6 lg:p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <GiCrownedSkull className="mx-auto text-6xl text-slate-600 opacity-50" />
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">No Ruler Emerged</h2>
          <p className="max-w-md mx-auto text-base text-slate-400">
            The crown currently has no holder. Teams must push their objectives and battle for control of the field.
          </p>
        </div>
      </section>
    )
  }

  const activePlayers = players.filter((player) => player.status !== 'eliminated').length
  const jewelSlots = Array.from({ length: 4 })

  return (
    <section className="panel overflow-hidden p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37]">
            <GiCrownedSkull className="crown-pulse text-lg" />
            Current Ruler
          </div>
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-400">Top Position</p>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{teamName}</h2>
            <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
              Crown control is live. This team currently leads the field with the best battlefield pressure and objective hold.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-slate-400">Total HP</p>
              <p className="mt-2 text-2xl font-bold text-white">{totalHP}</p>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
               <p className="text-sm text-slate-400">Jewels</p>
               <p className="mt-2 text-2xl font-bold flex items-center gap-2">
                 <span className="text-white">{jewels}</span>
                 <span className="flex items-center gap-0.5">
                   {jewelSlots.map((_, i) => (
                     <span 
                       key={i} 
                       className={`h-2.5 w-4 rounded-[1px] ${i < jewels ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-slate-800'}`} 
                     />
                   ))}
                 </span>
               </p>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-slate-400">Active</p>
              <p className="mt-2 text-2xl font-bold text-white">{activePlayers}</p>
            </div>
          </div>

          <HPBar hpValue={totalHP} maxHP={maxHP} label="Squad vitality" />
        </div>

        <motion.div
          key={teamName}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative flex min-h-[280px] items-center justify-center rounded-[2rem] border border-[#D4AF37]/20 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.24),transparent_45%),linear-gradient(180deg,rgba(212,175,55,0.12),rgba(255,255,255,0.03))]"
        >
          <GiSpikedDragonHead className="dragon-float absolute text-[12rem] text-white/8 sm:text-[14rem]" />
          <div className="relative flex flex-col items-center gap-4 text-center">
            <span className="text-6xl sm:text-7xl">{icon}</span>
            <GiCrownedSkull className="crown-pulse text-5xl text-[#D4AF37]" />
            <p className="text-lg font-semibold text-white">{teamName}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CrownDisplay