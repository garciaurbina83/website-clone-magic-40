import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Devon Lane",
    email: "devon@mail.com",
    location: "Philadelphia, USA",
    amount: "$50.00",
    type: "incoming",
  },
  {
    id: 2,
    name: "Bessie Cooper",
    email: "devon@mail.com",
    location: "Philadelphia, USA",
    amount: "$50.00",
    type: "incoming",
  },
  {
    id: 3,
    name: "Darrell Steward",
    email: "devon@mail.com",
    location: "Philadelphia, USA",
    amount: "$50.00",
    type: "incoming",
  },
];

const TransactionList = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Location</label>
          <Select>
            <option>Enter or province</option>
          </Select>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Amount Spent</label>
          <Select>
            <option>Enter or province</option>
          </Select>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Transaction End Date</label>
          <div className="relative">
            <Input placeholder="Select or province" />
            <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Type of Transaction</label>
          <Select>
            <option>Enter or province</option>
          </Select>
        </div>
      </div>

      <Card className="bg-secondary/50 border-0">
        <div className="min-w-full divide-y divide-muted">
          <div className="grid grid-cols-5 gap-4 px-6 py-3">
            <div className="text-sm text-muted-foreground">Customer name</div>
            <div className="text-sm text-muted-foreground">Email</div>
            <div className="text-sm text-muted-foreground">Location</div>
            <div className="text-sm text-muted-foreground">Spent</div>
            <div className="text-sm text-muted-foreground"></div>
          </div>
          <div className="divide-y divide-muted/30">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium">{transaction.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{transaction.name}</span>
                </div>
                <div className="text-sm text-muted-foreground self-center">{transaction.email}</div>
                <div className="text-sm text-muted-foreground self-center">{transaction.location}</div>
                <div className="text-sm font-medium self-center">{transaction.amount}</div>
                <div className="flex justify-end">
                  <button className="text-sm text-muted-foreground hover:text-foreground">•••</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TransactionList;