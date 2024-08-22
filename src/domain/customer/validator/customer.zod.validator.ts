import { z, ZodError } from "zod";
import ValidatorInterface from "@/domain/@shared/validator/validator.interface";
import Customer from "@/domain/customer/entity/customer";

export default class CustomerZodValidator implements ValidatorInterface<Customer> {
   validate(entity: Customer): void {
      try {
         z.object({
            id: z.string().min(1, { message: "ID is required" }),
            name: z.string().min(1, { message: "Name is required" }),
         }).parse({
            id: entity.id,
            name: entity.name,
         });
      } catch (errors) {
         const e = errors as ZodError;

         e.errors.forEach((error) => {
            entity.notification.addError({
               message: error.message,
               context: "Customer",
            });
         });
      }
   }
}
