import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import IconSearch from "@/assets/icons/IconSearch";
import { useForm } from "react-hook-form";
import useSetUrlQuery from "@/lib/useSetUrlQuery";
import IconClose from "@/assets/icons/IconClose";

const SearchBox = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const { setQuery, getQuery, deleteQuery } = useSetUrlQuery();
  let currentSearch = getQuery("search");
  const handleSearch = (data: { search: string }) => {
    setQuery({ key: "search", value: data.search, backToFirstPage: true });
  };
  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className=" flex items-center rounded-md justify-center border-2 border-blue-500"
    >
      <Input
        value={currentSearch}
        {...register("search")}
        placeholder="Search in products..."
        className=" border-none outline-none"
      />

      {currentSearch ? (
        <Button
          type="button"
          variant="ghost"
          onClick={() => deleteQuery({ key: "search" })}
        >
          <IconClose />
        </Button>
      ) : (
        <Button variant="ghost">
          <IconSearch />
        </Button>
      )}
    </form>
  );
};

export default SearchBox;
