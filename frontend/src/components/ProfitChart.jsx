import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function ProfitChart({ history }) {
  const data = history?.map((t, i) => ({
    index: i + 1,
    profit: t.profit,
  })) || []

  return (
    <div className="bg-black border border-gray-800 p-4 rounded-xl mt-6">

      <h2 className="text-lg font-bold mb-4">
        Profit Evolution 📈
      </h2>

      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="index" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#22c55e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}