import { Home, BarChart3, Users, Settings, HelpCircle, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Dashboard" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Users, label: "Team" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ];

  return (
    <div className="h-screen w-64 bg-secondary fixed left-0 top-0 p-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 bg-primary rounded-lg"></div>
        <span className="text-xl font-bold">BankCo</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-muted transition-colors",
                  index === 0 && "text-white bg-muted"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-muted rounded-lg transition-colors mt-auto">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;