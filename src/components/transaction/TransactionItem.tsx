interface Transaction {
  id: number;
  name: string;
  email: string;
  location: string;
  amount: string;
  type: string;
}

export const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <div className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-muted/50 transition-colors duration-200">
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
  );
};