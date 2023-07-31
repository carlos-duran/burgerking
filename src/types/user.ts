export type TRole = "admin" | "chef" | "waiter";

export type TUser = {
  name: string;
  email: string;
  role: TRole;
};
