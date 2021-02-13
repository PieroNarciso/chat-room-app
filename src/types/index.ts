export interface LoginData {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Message {
  id: number;
  user: User;
  msg: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}
