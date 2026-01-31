import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Lun', ventes: 450 },
  { day: 'Mar', ventes: 620 },
  { day: 'Mer', ventes: 380 },
  { day: 'Jeu', ventes: 710 },
  { day: 'Ven', ventes: 890 },
  { day: 'Sam', ventes: 520 },
  { day: 'Dim', ventes: 930 }
];

export default function SalesChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="day" stroke="#666" />
          <YAxis stroke="#666" tickFormatter={(value) => `${value} DT`} />
          <Tooltip 
            formatter={(value) => [`${value} DT`, 'Ventes']}
            labelFormatter={(label) => `Jour: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="ventes"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ stroke: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}