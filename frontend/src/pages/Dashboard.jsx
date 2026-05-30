import { useEffect, useState } from "react"
import ProfitChart from "../components/ProfitChart"
import StatsCards from "../components/StatsCards"
import OpportunitiesTable from "../components/OpportunitiesTable"
import TradeHistory from "../components/TradeHistory"

export default function Dashboard() {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/arbitrage")
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 2000)
    return () => clearInterval(interval)
  }, [])

  const execution = data?.execution
  const trade = execution?.trade_executed
  const wallet = execution?.wallet
  const opportunity = data?.opportunity
  const history = wallet?.history || []

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-green-400 mb-6">
        ⚡ Bitcoin Arbitrage Engine LIVE
      </h1>

      {/* CARDS */}
      <StatsCards wallet={wallet} trade={trade} />

      {/* OPPORTUNITIES */}
      <OpportunitiesTable opportunity={opportunity} />

      {/* LAST TRADE */}
      <div className="bg-black border border-gray-800 p-4 rounded-xl mb-6">
        <h2 className="text-lg font-bold mb-2">Last Trade</h2>

        {trade ? (
          <div>
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
      <ProfitChart history={wallet?.history || []} />

      {/* HISTORY */}
      <div className="mt-6">
        <TradeHistory history={wallet?.history || []} />
      </div>

    </div>
  )
}