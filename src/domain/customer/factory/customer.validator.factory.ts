import ValidatorInterface from "@/domain/@shared/validator/validator.interface";
import Customer from "@/domain/customer/entity/customer";
import CustomerZodValidator from "@/domain/customer/validator/customer.zod.validator";
// import CustomerYupValidator from "@/domain/customer/validator/customer.yup.validator";

export default class CustomerValidatorFactory {
   static create(): ValidatorInterface<Customer> {
      //   return new CustomerYupValidator();
      return new CustomerZodValidator();
   }
}
