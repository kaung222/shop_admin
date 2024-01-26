import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const OrderFilterbar = () => {
  const { register } = useForm();
  return (
    <div className="flex items-center justify-between space-x-10">
      <Input name="order" placeholder="Search in orders..." className="" />
      <div className="flex py-3 items-center space-x-6">
        <Select value="newToOld">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Newest to oldest" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="newToOld">Newest to oldest</SelectItem>
              <SelectItem value="oldToNew">Oldest to newest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Select value="apple">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">All</SelectItem>
            <SelectItem value="banana">Pending</SelectItem>
            <SelectItem value="blueberry">Acceptedd</SelectItem>
            <SelectItem value="grapes">Shipped</SelectItem>
            <SelectItem value="pineapple">Delievered</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default OrderFilterbar;
