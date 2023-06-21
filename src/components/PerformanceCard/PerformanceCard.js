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
  // Mock data for bicep curls 
  const volume_data = [
    {
      total_volume: 360,
      created_at: "2023-06-20",
    },
    {
      total_volume: 360,
      created_at: "2023-06-22",
    },
    {
      total_volume: 370,
      created_at: "2023-06-24",
    },
    {
      total_volume: 376,
      created_at: "2023-06-28",
    },
    {
      total_volume: 376,
      created_at: "2023-06-30",
    },
  ];

  return (
    <article className="performance">
      <div className="performance__header">
        <h2 className="performance__name">Bicep Curls</h2>
        <h2 className="performance_metric">Volume</h2>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={310}
          height={150}
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
