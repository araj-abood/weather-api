export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export type UserContextType = {
  loggedInUser: IUser | null;
  handleLogin: (username: string, password: string) => IUser;
  handleSigup: (user: IUser) => IUser;
  updateUser: (data: object) => IUser;
};
