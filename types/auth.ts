import { UserType } from "./user";

export type AuthResponse = {
  doc: {
    token: string;
    refreshToken: string;
    user: UserType;
  };
};

export type GoogleAuthCallBackType = {
  email: string;
  firstName: string;
  lastName: string;
  family_name: string;
  given_name: string;
  picture: string;
};
