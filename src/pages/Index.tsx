import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import RevenueChart from "@/components/RevenueChart";
import TransactionList from "@/components/TransactionList";
import EfficiencyChart from "@/components/EfficiencyChart";
import { Command, CommandInput } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Plus, Download, Upload } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64 p-6 lg:p-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening with your accounts.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Import
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add New
              </Button>
              <div className="w-[300px]">
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder="Search transactions..." />
                </Command>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <EfficiencyChart />
          </div>
        </div>

        <div>
          <TransactionList />
        </div>
      </main>
    </div>
  );
};

export default Index;