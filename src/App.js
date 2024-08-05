import "./App.css";
import PieGraph from "./components/Pie";
import LineGraph from "./components/Line";
import BarGraph from "./components/Bar";

export default function App() {
  return (
    <div className="container">
      <h2>My Charts</h2>
      <div className="chart-container">
        <LineGraph />
      </div>
      <div className="chart-container">
        <BarGraph />
      </div>
      <div className="chart-container">
        <PieGraph />
      </div>
    </div>
  );
}
