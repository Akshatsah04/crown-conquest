const typeStyles = {
  'Puzzle Solved': 'bg-cyan-500/10 text-cyan-300 ring-cyan-500/20',
  'HP Change': 'bg-rose-500/10 text-rose-300 ring-rose-500/20',
  'Crown Capture': 'bg-[#D4AF37]/10 text-[#D4AF37] ring-[#D4AF37]/20',
  Elimination: 'bg-slate-500/10 text-slate-300 ring-slate-500/20',
  Recovery: 'bg-emerald-500/10 text-emerald-300 ring-emerald-500/20',
  'Power Play': 'bg-violet-500/10 text-violet-300 ring-violet-500/20',
}

function BattleLog({ events }) {
  return (
    <section id="battle-log" className="panel lg:sticky lg:top-24 flex h-[600px] flex-col p-4 sm:p-5">
      <div className="mb-4 sm:mb-5 flex shrink-0 items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Arena Feed</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Battle Log</h2>
        </div>
        <span className="shrink-0 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">
          Live
        </span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {events.map((entry) => (
          <article key={entry.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${typeStyles[entry.type]}`}>
                {entry.type}
              </span>
              <span className="text-sm text-slate-400">{entry.time}</span>
            </div>
            <p className="text-sm leading-6 text-slate-200">{entry.event}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BattleLog