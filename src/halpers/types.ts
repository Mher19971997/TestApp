import { Dispatch, SetStateAction } from "react";

export interface IData {
  id: number;
  [key: string]: string | number;
  barcode: number;
  product_brand: string;
  product_name: string;
  product_quantity: number;
  price: number;
  product_article: string;
  product_size: string | number;
}

export interface ICategories {
  [key: string]: string | number;
}

export interface IFilter {
  setFilteredData: Dispatch<SetStateAction<IData[]>>;
  isCleared?: boolean;
}

export type RenderEditableCell = (item: IData, key: string) => any;
