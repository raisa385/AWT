import { CreateProductDto } from "./create-product.dto.js";
import { PartialType } from "@nestjs/mapped-types";

export class PartialUpdateProductDto extends PartialType(CreateProductDto){}