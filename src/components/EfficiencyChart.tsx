import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

const data = [
  { name: 'Spent', value: 70 },
  { name: 'Remaining', value: 30 },
];

const COLORS = ['#22C55E', '#374151'];

const EfficiencyChart = () => {
  return (
    <Card className="bg-secondary p-4 h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Efficiency</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default EfficiencyChart;