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

interface TransactionFiltersProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export const TransactionFilters = ({ date, setDate }: TransactionFiltersProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <label className="text-sm text-muted-foreground mb-2 block">Location</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent className="bg-opacity-70">
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
          <SelectContent className="bg-opacity-70">
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
          <PopoverContent className="w-auto p-0 bg-opacity-70" align="start">
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
          <SelectContent className="bg-opacity-70">
            <SelectItem value="incoming">Incoming</SelectItem>
            <SelectItem value="outgoing">Outgoing</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};