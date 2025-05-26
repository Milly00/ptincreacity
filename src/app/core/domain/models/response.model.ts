export interface ResponseGet<T> {
  status: string;
  message: string;
  data: T;
}

export interface ResponseId<T> {
  status: string;
  message: string;
  data: T;
}

export interface ResponseCommon {
  status: string;
  message: string;
}
