import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TransactionFilters } from "./transaction/TransactionFilters";
import { TransactionHeader } from "./transaction/TransactionHeader";
import { TransactionItem } from "./transaction/TransactionItem";

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

type SortConfig = {
  key: 'name' | 'email' | 'location' | 'amount';
  direction: 'asc' | 'desc';
} | null;

const TransactionList = () => {
  const [date, setDate] = useState<Date>();
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (!sortConfig) return 0;

    const { key, direction } = sortConfig;
    let aValue = key === 'amount' ? parseFloat(a[key].replace('$', '')) : a[key];
    let bValue = key === 'amount' ? parseFloat(b[key].replace('$', '')) : b[key];

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: SortConfig['key']) => {
    setSortConfig((currentSort) => {
      if (currentSort?.key === key) {
        return currentSort.direction === 'asc'
          ? { key, direction: 'desc' }
          : null;
      }
      return { key, direction: 'asc' };
    });
  };

  return (
    <div className="space-y-4">
      <TransactionFilters date={date} setDate={setDate} />
      <Card className="bg-secondary/50 border-0">
        <div className="min-w-full divide-y divide-muted">
          <TransactionHeader handleSort={handleSort} sortConfig={sortConfig} />
          <div className="divide-y divide-muted/30">
            {sortedTransactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TransactionList;