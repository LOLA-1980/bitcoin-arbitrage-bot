export default function StatsCards({ wallet, trade }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">

      <div className="bg-black border border-gray-800 p-4 rounded-xl">
        <p className="text-gray-400 text-sm">USD Balance</p>
        <p className="text-2xl font-bold text-white">
          ${wallet?.usd?.toFixed(2) || 10000}
        </p>
      </div>

      <div className="bg-black border border-gray-800 p-4 rounded-xl">
        <p className="text-gray-400 text-sm">BTC Balance</p>
        <p className="text-2xl font-bold text-white">
          {wallet?.btc || 1}
        </p>
      </div>

      <div className="bg-black border border-gray-800 p-4 rounded-xl">
        <p className="text-gray-400 text-sm">Total Profit</p>
        <p className="text-2xl font-bold text-green-400">
          ${wallet?.total_profit?.toFixed(2) || 0}
        </p>
      </div>

      <div className="bg-black border border-gray-800 p-4 rounded-xl">
        <p className="text-gray-400 text-sm">Trades Executed</p>
        <p className="text-2xl font-bold text-white">
            {wallet?.history?.length || 0}
        </p>
      </div>

    </div>
  )
}