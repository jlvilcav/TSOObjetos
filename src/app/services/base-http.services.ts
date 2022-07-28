import axios from "axios";
import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { Category } from "./../models/category.model";

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(protected url: string) {}

  async getAll() {
    const {data} = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID,DTO>(id: ID, changes: DTO) {
    const {data} = await axios.put(`${this.url}/${id}`, changes);
    return data;
    // throw new Error("Method not implemented.");
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<number>();
// service1.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll();
  console.log('Products ',rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'Producto 1 actualizado'
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  // categoryService.

  const rta1 = await categoryService.getAll();
  console.log('Categories ',rta1.length);

})();
// const url1 = 'https://api.escuelajs.co/api/v1/products';
// const productsService = new BaseHttpService<Product>(url1);
