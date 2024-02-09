export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password: string;
  role: string;
  status: "active" | "restrict";
};
