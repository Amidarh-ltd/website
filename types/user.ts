export interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  subscription: string;
  subscriptionDuration: number;
  subscriptionExpires: string;
  isBlocked: boolean;
  role: string;
  twoFactor: boolean;
  massLogin: boolean;
  noOfLoggedInDevices: number;
  isVerified: boolean;
  cbtTrials: number;
  signUpMode: string;
}
