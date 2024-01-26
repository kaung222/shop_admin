import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const invoices = [
  {
    invoice: "James",
    paymentStatus: "0922432421",
    totalAmount: "Active",
    paymentMethod: "10/20/30",
  },
  {
    invoice: "John",
    paymentStatus: "20304533453",
    totalAmount: "Active",
    paymentMethod: "10/20/30",
  },
  {
    invoice: "INV002",
    paymentStatus: "Unpaid",
    totalAmount: "Active",
    paymentMethod: "10/20/30",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "Restricted",
    paymentMethod: "10/20/30",
  },
];

export default function UserTable() {
  return (
    <div className="h-[70vh] overflow-auto scroll-m-1 scroll-smooth">
      <Table>
        <TableCaption>A list of recent registered users.</TableCaption>
        <TableHeader className=" bg-slate-200">
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Phone No.</TableHead>
            <TableHead className="">Register Date</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>
                <Button>Restrict</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
