const rules = [
  'Each team has 20 HP at the start of Round 1 and the HP after each round is shown on the dashboard.',
  'HP decreases through battle penalties or failed challenges and puzzles..',
  'When a team reaches 0 HP, they are eliminated and return after 3 rounds.',
  'After passing each round, the team earns a Jewel. Each team MUST acquire atleast 2 Jewels to be qualified to compete for the round.',
]

function Rules() {
  return (
    <section id="rules" className="section-shell pb-16 sm:pb-20">
      <div className="panel p-6 sm:p-8">
        <p className="text-[0.7rem] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.28em] text-slate-400">Rules Section</p>
        <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
          {rules.map((rule, index) => (
            <div key={rule} className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-slate-200">
              <p className="mb-2 sm:mb-3 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#D4AF37]">Rule {index + 1}</p>
              {rule}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rules