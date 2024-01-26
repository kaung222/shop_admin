import IconDelete from "@/assets/icons/IconDelete";
import IconDots from "@/assets/icons/IconDots";
import IconEdit from "@/assets/icons/IconEdit";
import IconInfo from "@/assets/icons/IconInfo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { AlertDialogDemo } from "./alert-dialog";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <IconDots />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/products/23423"}>
            <DropdownMenuItem>
              Details
              <DropdownMenuShortcut>
                <IconInfo className=" text-sm text-green-500" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={"/products/edit/sdfas"}>
            <DropdownMenuItem>
              Update
              <DropdownMenuShortcut>
                <IconEdit className=" text-sm text-orange-500" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            Delete
            <DropdownMenuShortcut>
              <IconDelete className=" text-sm text-red-500" />
            </DropdownMenuShortcut>
            {/* <AlertDialogDemo /> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
