import ValidatorInterface from "@/domain/@shared/validator/validator.interface";
import Product from "@/domain/product/entity/product";
import ProductZodValidator from "@/domain/product/validator/product.zod.validator";
// import ProductYupValidator from "@/domain/product/validator/product.yup.validator";

export default class ProductValidatorFactory {
   static create(): ValidatorInterface<Product> {
      //   return new ProductYupValidator();
      return new ProductZodValidator();
   }
}
