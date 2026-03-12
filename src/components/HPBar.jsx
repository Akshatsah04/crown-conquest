import { motion } from 'framer-motion'

function HPBar({ hpValue, maxHP, label = 'HP' }) {
  const percentage = Math.max(0, Math.min(100, (hpValue / maxHP) * 100))

  const colorClass =
    percentage === 0
      ? 'bg-[#7F8C8D]'
      : percentage < 30
        ? 'bg-[#E63946]'
        : percentage <= 60
          ? 'bg-amber-400'
          : 'bg-[#2ECC71]'

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
        <span>{label}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/5">
        <motion.div
          className={`h-full origin-left rounded-full ${colorClass}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: percentage / 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default HPBar