import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";

interface StatsCardProps {
  title: string;
  amount: string;
  trend: number;
  type: "earning" | "spending";
}

const StatsCard = ({ title, amount, trend, type }: StatsCardProps) => {
  const isPositive = trend > 0;
  
  return (
    <Card className="p-6 bg-secondary hover:bg-muted transition-colors duration-200 relative overflow-hidden">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-lg bg-muted">
          <DollarSign className="w-5 h-5 text-primary" />
        </div>
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      
      <div className="flex items-end justify-between mb-6">
        <h3 className="text-3xl font-bold tracking-tight">${amount}</h3>
        <div className={`flex items-center ${isPositive ? 'text-primary' : 'text-destructive'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span className="text-sm font-medium ml-1">
            {Math.abs(trend)}% from last week
          </span>
        </div>
      </div>

      {/* Mini Sparkline Chart - This is just a visual representation */}
      <div className="absolute bottom-0 right-0 w-24 h-12 opacity-50">
        <svg viewBox="0 0 100 30" className="w-full h-full">
          <path
            d="M0 25L5 20L10 22L15 18L20 23L25 15L30 20L35 15L40 18L45 12L50 15L55 8L60 15L65 10L70 15L75 5L80 12L85 8L90 12L95 2L100 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
      </div>
    </Card>
  );
};

export default StatsCard;