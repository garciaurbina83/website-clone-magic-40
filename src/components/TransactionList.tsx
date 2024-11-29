import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Sarah Connor",
    amount: "$150.00",
    status: "Completed",
    date: "Today",
    type: "incoming",
  },
  {
    id: 2,
    name: "John Smith",
    amount: "$89.99",
    status: "Pending",
    date: "Yesterday",
    type: "outgoing",
  },
  {
    id: 3,
    name: "Emma Wilson",
    amount: "$299.99",
    status: "Completed",
    date: "Yesterday",
    type: "incoming",
  },
];

const TransactionList = () => {
  return (
    <Card className="bg-secondary p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Your recent financial activities</p>
        </div>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-background/5 transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${
                transaction.type === 'incoming' ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'
              }`}>
                {transaction.type === 'incoming' ? 
                  <ArrowUpRight className="w-4 h-4" /> : 
                  <ArrowDownRight className="w-4 h-4" />
                }
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{transaction.amount}</p>
              <p className={`text-sm ${
                transaction.status === "Completed" ? "text-primary" : "text-yellow-500"
              }`}>
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TransactionList;