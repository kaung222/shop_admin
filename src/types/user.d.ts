export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password: string;
  role: string;
  status: "active" | "restricted";
};

export type Merchant = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password: string;
  role: string;
  status: "approved" | "pending";
};
