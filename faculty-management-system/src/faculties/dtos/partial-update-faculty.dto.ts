import { PartialType } from "@nestjs/mapped-types";
import { CreateFacultyDto } from "./create-faculty.dto.js";

export class PartialUpdateFacultyDto extends PartialType(CreateFacultyDto){}