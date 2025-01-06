import { Model } from "mongoose";

export interface TVariant {
  type: string;
  value: string;
}

export interface TInventory {
  quantity: number;
  inStock: boolean;
}

export interface TProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
}

//for creating static

export interface ProductModel extends Model<TProduct> {
  isproductExist(id: string): Promise<TProduct | null>;
}

// for creating instance

// export interface StudentMethods {
//   isUserExists(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
