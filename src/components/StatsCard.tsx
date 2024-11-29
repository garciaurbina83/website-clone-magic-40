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
    <Card className="p-6 bg-secondary hover:bg-muted transition-colors duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-2xl font-bold tracking-tight">${amount}</h3>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-primary' : 'text-destructive'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span className="text-sm font-medium ml-1">{Math.abs(trend)}%</span>
        </div>
      </div>
      <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${isPositive ? 'bg-primary' : 'bg-destructive'}`}
          style={{ width: `${Math.min(Math.abs(trend) * 5, 100)}%` }}
        />
      </div>
    </Card>
  );
};

export default StatsCard;