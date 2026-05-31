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
    //const interval = setInterval(fetchData, 3000)
    //return () => clearInterval(interval)
  }, [])

  const execution = data?.execution
  const trade = execution?.trade_executed
  const wallet = execution?.wallet
  const opportunity = data?.opportunity
  const prices = data?.prices

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

      {/* WALLET CARDS */}
      <StatsCards wallet={wallet} trade={trade} />

      {/* MARKET SNAPSHOT */}
      <div className="grid grid-cols-2 gap-4 mb-6 mt-6">

        <div className="bg-black border border-gray-800 p-4 rounded-xl">
          <p className="text-gray-400 text-sm mb-1">
            Binance BTC Price
          </p>

          <p className="text-2xl font-bold text-white">
            ${prices?.binance?.price?.toFixed(2) || "Loading..."}
          </p>
        </div>

        <div className="bg-black border border-gray-800 p-4 rounded-xl">
          <p className="text-gray-400 text-sm mb-1">
            Kraken BTC Price
          </p>

          <p className="text-2xl font-bold text-white">
            ${prices?.kraken?.price?.toFixed(2) || "Loading..."}
          </p>
        </div>

      </div>

      {/* OPPORTUNITIES */}
      <div className="mt-6">
        <OpportunitiesTable opportunity={opportunity} />
      </div>

      {/* LAST TRADE */}
      <div className="bg-black border border-gray-800 p-4 rounded-xl mb-6 mt-6">
        <h2 className="text-lg font-bold mb-2 text-white">
          Last Trade
        </h2>

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

      {/* PROFIT CHART */}
      <div className="mt-6">
        <ProfitChart history={wallet?.history || []} />
      </div>

      {/* TRADE HISTORY */}
      <div className="mt-6">
        <TradeHistory history={wallet?.history || []} />
      </div>

    </div>
  )
}