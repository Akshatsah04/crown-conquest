import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import CrownDisplay from '../components/CrownDisplay'
import Leaderboard from '../components/Leaderboard'
import BattleLog from '../components/BattleLog'
import Footer from '../components/Footer'
import { teamsData } from '../data/teams'
import { battleLogData } from '../data/battleLog'

const eventPhases = ['Puzzle Phase', 'Battle Phase', 'Final Defense']

function Dashboard() {
  const [teams] = useState(teamsData)
  const [battleLog] = useState(battleLogData)
  
  // Find the team with crownHolder set to true, or null if absolutely none have it.
  const [crownHolder] = useState(teamsData.find((team) => team.crownHolder)?.id ?? null)
  const [openTeam, setOpenTeam] = useState(crownHolder ?? teamsData[0].id)

  const crownTeam = useMemo(
    () => teams.find((team) => team.id === crownHolder) ?? null,
    [crownHolder, teams],
  )

  const handleTeamToggle = (id) => {
    setOpenTeam((current) => (current === id ? null : id))
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="section-shell py-10 sm:py-12 lg:py-14">
        <div className="space-y-8">
          <section className="panel p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Event Phase Indicator</p>
                <h1 className="mt-2 text-3xl font-bold text-white">Competition Dashboard</h1>
                <p className="mt-2 text-sm text-slate-300">Standings, HP pressure, crown ownership, and battle activity update from one control panel.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {eventPhases.map((phase, index) => (
                  <span
                    key={phase}
                    className={[
                      'rounded-full border px-4 py-2 text-sm font-medium',
                      index === 0
                        ? 'border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#D4AF37]'
                        : 'border-white/10 bg-black/20 text-slate-300',
                    ].join(' ')}
                  >
                    {phase}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <CrownDisplay
            teamName={crownTeam?.name}
            jewels={crownTeam?.jewels}
            totalHP={crownTeam?.totalHP}
            maxHP={crownTeam?.maxHP}
            players={crownTeam?.players}
            icon={crownTeam?.icon}
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)] lg:items-start">
            <Leaderboard teams={teams} openTeam={openTeam} onToggle={handleTeamToggle} />
            <BattleLog events={battleLog} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard