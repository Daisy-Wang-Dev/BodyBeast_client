import "./PerformanceCard.scss";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PerformanceCard = ({ exercise }) => {
    const {exercise_name, volume_data} = exercise;

  return (
    <article className="performance">
      <div className="performance__header">
        <h2 className="performance__name">{exercise_name}</h2>
        <h2 className="performance_metric">Volume</h2>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          // width={500}
          width={250}
          height={80}
          // height={150}
          data={volume_data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <XAxis dataKey="created_at" />

          <Tooltip />
          <Line
            type="monotone"
            dataKey="total_volume"
            stroke="#414c83"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
};

export default PerformanceCard;
