import { IsNotEmpty, IsUrl, Length, validateOrReject } from 'class-validator'; //empieza en minuscula se usa como funcion, si inicia con mayuscula es un decorador
import { AccessType, Category } from "../models/category.model";

export interface CreateCategoryDto extends Omit<Category, 'id' >{
  categoryId: Category['id'];
}

export class CreateCategoryDto implements CreateCategoryDto {

  @IsNotEmpty()
  @Length(4,140)
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Cccccc';
    dto.image = 'https://www.google.com/img/logo_plain.png';
    // dto.access = AccessType.PUBLIC;
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }

})();
