import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { Card } from "@/components/ui/card";
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const data = [
  { name: 'Others', value: 40, color: '#FFFFFF' },
  { name: 'Goal', value: 15, color: '#22C55E' },
  { name: 'Spending', value: 35, color: '#FDB022' },
];

const EfficiencyChart = () => {
  return (
    <Card className="bg-secondary p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Efficiency</h3>
        <Button variant="ghost" className="text-sm text-muted-foreground hover:text-white">
          Monthly <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="relative h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-primary">$5,230</span>
          <span className="text-sm text-muted-foreground">Arrival</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default EfficiencyChart;