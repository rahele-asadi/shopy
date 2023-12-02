export interface RegisterFormValuesInterface {
  name: string;
  phone: string;
  // email: string;
  // password: string;
}

export interface LoginFormValuesInterface {
  phone: string;
  // email: string;
  // password: string;
}

export interface VerifyFormValuesInterface {
  code: string;
  token: string;
}
