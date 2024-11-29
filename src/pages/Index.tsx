import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import RevenueChart from "@/components/RevenueChart";
import TransactionList from "@/components/TransactionList";
import EfficiencyChart from "@/components/EfficiencyChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Earnings"
            amount="7,245.00"
            trend={12}
            type="earning"
          />
          <StatsCard
            title="Total Spending"
            amount="5,245.00"
            trend={-8}
            type="spending"
          />
          <StatsCard
            title="Spending Goal"
            amount="7,245.00"
            trend={5}
            type="earning"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <EfficiencyChart />
          </div>
        </div>

        <div className="mt-8">
          <TransactionList />
        </div>
      </main>
    </div>
  );
};

export default Index;