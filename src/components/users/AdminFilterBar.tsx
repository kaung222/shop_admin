import useSetUrlQuery from "@/lib/useSetUrlQuery";
import SearchBox from "../commons/search-box";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import Link from "next/link";

const AdminFilterbar = () => {
  const { setQuery, getQuery } = useSetUrlQuery();
  return (
    <div className="flex items-center justify-between space-x-10">
      <SearchBox />
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
        <Link href="/admins/create">
          <Button>Add Admin</Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminFilterbar;
