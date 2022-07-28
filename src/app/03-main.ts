import { ProductHttpService } from './services/product-http.service';

(async () => {

  try {
    const productService = new ProductHttpService();
    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    const productId = products[0].id;
    console.log('--'.repeat(10));
    console.log('update');
    await productService.update(productId, {
      price: 100001,
      title: 'Producto 1 modificado JV',
      description: 'Desc del prod1 modificado JV',
    });
    console.log('--'.repeat(10));
    console.log('findone');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.log(error);
  }

})();

