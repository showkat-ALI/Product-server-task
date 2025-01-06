import { z } from "zod";

export const orderValidationSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export default orderValidationSchema;
