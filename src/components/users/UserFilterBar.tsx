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

const UserFilterbar = () => {
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
        {/* <Select
          defaultValue={getQuery("role")}
          onValueChange={(value) =>
            setQuery({ key: "role", value, backToFirstPage: true })
          }
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem> 
              <SelectItem value="admins">Admins</SelectItem>
              <SelectItem value="merchants">Merchants</SelectItem>
              <SelectItem value="users">Users</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
      </div>
    </div>
  );
};

export default UserFilterbar;
