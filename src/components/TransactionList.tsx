import { Card } from "@/components/ui/card";

const transactions = [
  {
    id: 1,
    name: "Sarah Connor",
    amount: "$150.00",
    status: "Completed",
    date: "Today",
  },
  {
    id: 2,
    name: "John Smith",
    amount: "$89.99",
    status: "Pending",
    date: "Yesterday",
  },
  {
    id: 3,
    name: "Emma Wilson",
    amount: "$299.99",
    status: "Completed",
    date: "Yesterday",
  },
];

const TransactionList = () => {
  return (
    <Card className="bg-secondary p-4">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 bg-muted rounded-lg"
          >
            <div>
              <p className="font-medium">{transaction.name}</p>
              <p className="text-sm text-gray-400">{transaction.date}</p>
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