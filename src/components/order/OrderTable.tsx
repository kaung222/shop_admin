import React from "react";
import IconButton from "../commons/IconButton";
import IconEdit from "@/assets/icons/IconEdit";
import IconInfo from "@/assets/icons/IconInfo";
import Link from "next/link";
import IconDelete from "@/assets/icons/IconDelete";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const OrderTable = () => {
  return (
    <div className="h-[70vh] overflow-auto scroll-m-1 scroll-smooth">
      <Table>
        <TableHeader className=" bg-slate-200">
          <TableRow>
            <TableHead>OrderId</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>od-1111</TableCell>
            <TableCell>John doe</TableCell>
            <TableCell>10/2/2023</TableCell>
            <TableCell>pending</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
