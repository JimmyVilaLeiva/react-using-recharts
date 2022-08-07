import { PieChart, Pie, Cell } from "recharts";
import { getUsersData } from "../data/buyers";

const data = getUsersData();
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PieChartPadAngles() {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
