export interface AuthModel {
  username: string;
  password: string;
}

export interface Token {
  access: string;
  refresh: string;
}
