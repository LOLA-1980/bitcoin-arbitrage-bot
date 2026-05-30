export default function OpportunitiesTable({ opportunity }) {
  return (
    <div className="bg-black border border-gray-800 p-4 rounded-xl mb-6">

      <h2 className="text-lg font-bold mb-4 text-white">
        Market Opportunities
      </h2>

      {opportunity ? (
        <div className="grid grid-cols-3 gap-4">

          <div>
            <p className="text-gray-400 text-sm">BUY</p>
            <p className="text-white font-bold">
              {opportunity.buy_exchange}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">SELL</p>
            <p className="text-white font-bold">
              {opportunity.sell_exchange}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">PROFIT</p>
            <p className="text-green-400 font-bold">
              ${opportunity.profit}
            </p>
          </div>

        </div>
      ) : (
        <p className="text-gray-500">No opportunities detected</p>
      )}

    </div>
  )
}