import IconDelivery from "@/assets/icons/IconDelivery";
import IconHome from "@/assets/icons/IconHome";
import IconSetting from "@/assets/icons/IconSetting";
import IconShop from "@/assets/icons/IconShop";
import IconUsers from "@/assets/icons/IconUsers";

export const navbarLinks = [
  {
    name: "Dashboard",
    to: "/dashboard",
    id: 1,
    icon: <IconHome />,
  },
  {
    name: "Products",
    to: "/products?page=1&limit=10&category=all&sort=asc",
    id: 2,
    icon: <IconShop />,
  },
  {
    name: "Orders",
    to: "/orders?page=1&limit=10",
    id: 3,
    icon: <IconDelivery />,
  },
  {
    name: "Users",
    to: "/users?page=1&limit=10",
    id: 4,
    icon: <IconUsers />,
  },
  {
    name: "Setting",
    to: "/setting",
    id: 5,
    icon: <IconSetting />,
  },
];
