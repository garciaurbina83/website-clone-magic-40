import { ChevronsUpDown } from "lucide-react";

type SortConfig = {
  key: 'name' | 'email' | 'location' | 'amount';
  direction: 'asc' | 'desc';
} | null;

interface TransactionHeaderProps {
  handleSort: (key: SortConfig['key']) => void;
  sortConfig: SortConfig;
}

export const TransactionHeader = ({ handleSort, sortConfig }: TransactionHeaderProps) => {
  const getSortIcon = (key: SortConfig['key']) => {
    if (sortConfig?.key === key) {
      return (
        <ChevronsUpDown className={`ml-1 h-4 w-4 ${
          sortConfig.direction === 'asc' ? 'transform rotate-180' : ''
        }`} />
      );
    }
    return <ChevronsUpDown className="ml-1 h-4 w-4 text-muted-foreground/50" />;
  };

  return (
    <div className="grid grid-cols-5 gap-4 px-6 py-3">
      <button 
        onClick={() => handleSort('name')} 
        className="text-sm text-muted-foreground flex items-center cursor-pointer hover:text-foreground"
      >
        Customer name {getSortIcon('name')}
      </button>
      <button 
        onClick={() => handleSort('email')} 
        className="text-sm text-muted-foreground flex items-center cursor-pointer hover:text-foreground"
      >
        Email {getSortIcon('email')}
      </button>
      <button 
        onClick={() => handleSort('location')} 
        className="text-sm text-muted-foreground flex items-center cursor-pointer hover:text-foreground"
      >
        Location {getSortIcon('location')}
      </button>
      <button 
        onClick={() => handleSort('amount')} 
        className="text-sm text-muted-foreground flex items-center cursor-pointer hover:text-foreground"
      >
        Spent {getSortIcon('amount')}
      </button>
      <div className="text-sm text-muted-foreground"></div>
    </div>
  );
};