

export type TUserData = {
  address: string;
  signature: string;
  profileId: string;
  expirationTime: string;
};

export interface ISession {
  user: TUserData;
}


