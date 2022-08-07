import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getSellingWeekly } from "../data/sellings";

const data = getSellingWeekly();

export default function LineChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="delivered" stackId="a" fill="#8884d8" />
      <Bar dataKey="returned" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}
