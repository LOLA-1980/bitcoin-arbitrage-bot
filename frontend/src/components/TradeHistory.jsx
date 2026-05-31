export default function TradeHistory({ history }) {
  return (
    <div className="bg-black border border-gray-800 p-4 rounded-xl">

      <h2 className="text-lg font-bold mb-4 text-white">
        Trade History
      </h2>

      {history?.length > 0 ? (
        <div className="space-y-2 max-h-96 overflow-y-auto">

          {history.map((t, i) => (
            <div
              key={i}
              className="flex justify-between p-3 bg-gray-900 rounded-lg"
            >

              <div>
                <p className="text-xs text-gray-400">
                  BUY → {t.buy_exchange}
                </p>
                <p className="text-xs text-gray-400">
                  SELL → {t.sell_exchange}
                </p>
                <p className="text-xs text-gray-500">
                    {new Date(t.timestamp).toLocaleString()}
                </p>
              </div>

              <div className="text-right">
                <p className="text-white font-bold">
                  {t.amount_btc} BTC
                </p>

                <p className="text-green-400 font-bold">
                  ${t.profit}
                </p>
              </div>

            </div>
          ))}

        </div>
      ) : (
        <p className="text-gray-500">No trades yet</p>
      )}

    </div>
  )
}