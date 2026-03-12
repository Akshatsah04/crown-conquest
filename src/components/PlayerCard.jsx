const statusClasses = {
  active: 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30',
  recovering: 'bg-amber-500/15 text-amber-300 ring-amber-500/30',
  fatigued: 'bg-rose-500/15 text-rose-300 ring-rose-500/30',
  eliminated: 'bg-slate-500/15 text-slate-300 ring-slate-500/30',
}

function PlayerCard({ name, status }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-white">{name}</h4>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ring-1 ${statusClasses[status]}`}>
          {status}
        </span>
      </div>
    </article>
  )
}

export default PlayerCard