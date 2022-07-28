import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: "Producto 1",
  price: 12,
  description: "Descripcion del producto 1",
  categoryId: 1,
  images: []
});
const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: "Producto 1 modificado"
});

const rta = productService.findOne(productId);

console.log(rta);


