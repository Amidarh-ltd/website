import { UserType } from "./user";

export type AuthResponse = {
  doc: {
    token: string;
    refreshToken: string;
    user: UserType;
  };
};
