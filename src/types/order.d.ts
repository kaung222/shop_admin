import { User } from "./user";

export type Order = {
  id: string;
  status: string;
  description: string;
  createdAt: string;
  user: User;
};
