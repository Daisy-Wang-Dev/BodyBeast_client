import "./PerformanceStat.scss";
import PerformanceCard from "../PerformanceCard/PerformanceCard";

const PerformanceStat = () => {
  return (
    <section className="performance-stats">
      <h1 className="performance-stats__title">PERFORMANCE STATS</h1>
      <PerformanceCard/>
    </section>
  );
};

export default PerformanceStat;
