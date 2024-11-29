import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  amount: string;
  trend: number;
  type: "earning" | "spending";
}

const StatsCard = ({ title, amount, trend, type }: StatsCardProps) => {
  const isPositive = trend > 0;
  
  return (
    <Card className="p-6 bg-secondary">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">${amount}</h3>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-primary' : 'text-destructive'}`}>
          {isPositive ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
          <span className="text-sm ml-1">{Math.abs(trend)}%</span>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;