import { Model } from "mongoose";

export interface TOrder {
  id: string;
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

//for creating static

export interface OrderModel extends Model<TOrder> {}

// for creating instance

// export interface StudentMethods {
//   isUserExists(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
