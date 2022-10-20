export interface IAuthentication {
  id?: number | string;
  email: string;
  password: string;
  confirmPassword?: string;
}
