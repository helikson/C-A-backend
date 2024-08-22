import { z, ZodError } from "zod";
import ValidatorInterface from "@/domain/@shared/validator/validator.interface";
import Product from "@/domain/product/entity/product";

export default class ProductZodValidator implements ValidatorInterface<Product> {
   validate(entity: Product): void {
      try {
         z.object({
            id: z.string().min(1, { message: "ID is required" }),
            name: z.string().min(1, { message: "Name is required" }),
            price: z.number().gt(0, { message: "Price must be greater than zero" }),
         }).parse({
            id: entity.id,
            name: entity.name,
            price: entity.price,
         });
      } catch (errors) {
         const e = errors as ZodError;

         e.errors.forEach((error) => {
            entity.notification.addError({
               message: error.message,
               context: "Product",
            });
         });
      }
   }
}
