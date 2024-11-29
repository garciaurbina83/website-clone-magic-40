import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

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
  const [date, setDate] = useState<Date>();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Location</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ny">New York, USA</SelectItem>
              <SelectItem value="la">Los Angeles, USA</SelectItem>
              <SelectItem value="ph">Philadelphia, USA</SelectItem>
              <SelectItem value="sf">San Francisco, USA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Amount Spent</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select amount range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">$0 - $50</SelectItem>
              <SelectItem value="51-100">$51 - $100</SelectItem>
              <SelectItem value="101-500">$101 - $500</SelectItem>
              <SelectItem value="501+">$501+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Transaction End Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Type of Transaction</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="incoming">Incoming</SelectItem>
              <SelectItem value="outgoing">Outgoing</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
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