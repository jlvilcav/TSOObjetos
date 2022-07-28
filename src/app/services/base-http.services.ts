import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "./../models/category.model";

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(private url: string) {}

  async getAll() {
    const {data} = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<number>();
// service1.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const service = new BaseHttpService<Product>(url1);
  const products = await service.getAll();
  console.log('Products ',products.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta = await categoryService.getAll();
  console.log('Categories ',rta.length);

})();
// const url1 = 'https://api.escuelajs.co/api/v1/products';
// const productsService = new BaseHttpService<Product>(url1);
