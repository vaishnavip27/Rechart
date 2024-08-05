import { Pie } from "react-chartjs-2";
import { pieChartData } from "../FAKE_DATA.js";

import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

export default function PieGraph() {
  const options = {};

  return <Pie options={options} data={pieChartData} />;
}
