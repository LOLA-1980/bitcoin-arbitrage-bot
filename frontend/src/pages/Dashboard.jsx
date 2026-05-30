import { useEffect, useState } from "react"
import ProfitChart from "../components/ProfitChart"
import StatsCards from "../components/StatsCards"
import OpportunitiesTable from "../components/OpportunitiesTable"
import TradeHistory from "../components/TradeHistory"

export default function Dashboard() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/arbitrage")
      const json = await res.json()
      setData(json)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 2000) // 👈 PERFECTO PARA DEMO
    return () => clearInterval(interval)
  }, [])

  const execution = data?.execution
  const trade = execution?.trade_executed
  const wallet = execution?.wallet
  const opportunity = data?.opportunity

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-green-400 text-xl animate-pulse">
          Connecting Arbitrage Engine...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-400">
          ⚡ Bitcoin Arbitrage Engine LIVE
        </h1>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm">LIVE</span>
        </div>
      </div>

      {/* CARDS */}
      <StatsCards wallet={wallet} trade={trade} />

      {/* OPPORTUNITIES */}
      <div className="mt-6">
        <OpportunitiesTable opportunity={opportunity} />
      </div>

      {/* LAST TRADE */}
      <div className="bg-black border border-gray-800 p-4 rounded-xl mb-6 mt-6">
        <h2 className="text-lg font-bold mb-2 text-white">Last Trade</h2>

        {trade ? (
          <div className="space-y-1">
            <p>BUY → {trade.buy_exchange}</p>
            <p>SELL → {trade.sell_exchange}</p>
            <p className="text-green-400 font-bold">
              Profit: ${trade.profit}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">No trades yet</p>
        )}
      </div>

      {/* CHART */}
      <div className="mt-6">
        <ProfitChart history={wallet?.history || []} />
      </div>

      {/* HISTORY */}
      <div className="mt-6">
        <TradeHistory history={wallet?.history || []} />
      </div>

    </div>
  )
}