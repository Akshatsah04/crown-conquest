import TeamCard from './TeamCard'

function Leaderboard({ teams, openTeam, onToggle }) {
  const sortedTeams = [...teams].sort(
    (first, second) => second.jewels - first.jewels || second.totalHP - first.totalHP
  )

  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Live Rankings</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Leaderboard</h2>
        </div>
        <p className="text-sm text-slate-400">Current standings based on jewels and HP.</p>
      </div>

      <div className="space-y-4">
        {sortedTeams.map((team) => (
          <TeamCard
            key={team.id}
            teamName={team.name}
            jewels={team.jewels}
            totalHP={team.totalHP}
            maxHP={team.maxHP}
            players={team.players}
            icon={team.icon}
            isOpen={openTeam === team.id}
            onToggle={() => onToggle(team.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Leaderboard