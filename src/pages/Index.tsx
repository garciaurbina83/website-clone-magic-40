import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import RevenueChart from "@/components/RevenueChart";
import TransactionList from "@/components/TransactionList";
import EfficiencyChart from "@/components/EfficiencyChart";
import { Command, CommandInput } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Sun, Bell, Mail, Gift } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-64 p-6 lg:p-8">
        <div className="flex flex-col gap-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening with your accounts.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-[300px]">
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder="Search transactions..." />
                </Command>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Sun className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Mail className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Gift className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500"></span>
                </Button>
                <div className="flex items-center gap-2 ml-2">
                  <Avatar>
                    <AvatarImage src="public/lovable-uploads/db21858c-823f-49c6-890c-77f46193cbcc.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">John Doe</span>
                    <span className="text-xs text-muted-foreground">Super Admin</span>
                  </div>
                </div>
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