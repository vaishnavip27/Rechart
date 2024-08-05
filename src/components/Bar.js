import { Bar } from "react-chartjs-2";
import { barChartData } from "../FAKE_DATA.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph() {
  const options = {};
  return <Bar options={options} data={barChartData} />;
}
