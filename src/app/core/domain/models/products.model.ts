export interface Product {
  name: string;
  price: number;
  description: string;
  code: string;
  //img: string;
  creation?: string | Date;
  edition?: string | Date;
  category: string;
}
