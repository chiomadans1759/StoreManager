import { validationResult } from 'express-validator/check';

const products = [];
// Products will be an array of Products objects

class ProductsController {

  // Get all Products
  static fetchAllProducts(req, res) {
    return res.status(200)
      .json({
        status: 'Success',
        products,
      });
  }


  // Add a Products to the products hash
  static addProduct(req, res) {
    const product = {};
    const productId = products.length + 1;

    product.id = productId;
    product.name = req.body.name;
    product.price = req.body.price;
    product.item = req.body.item;

    const errors = validationResult(req);    
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: 'Failed',
        message: `${errors.array()[0].msg} ${errors.array()[0].value} provided for ${errors.array()[0].param}`,
      });
    }

    for (let i = 0; i < products.length; i += 1) {
      if (product.name === products[i].name) {
        return res.status(409).json({
          message: `A product with name  ${product.name} already exist`,
        });
      }
    }

    products.push(product);
    return res.status(200).json({
      message: 'New Product successfully added!',
      status: 'Success',
      product: products[productId - 1],
    });
  }

  // Find a single product from the products hash using the saleId
  static findAProduct(req, res) {
    const productId = req.params.id;
    if (products[productId - 1]) {
      return res.status(200).json(products[productId - 1]);
    }

    return res.status(404).json({
      message: ` There is no product with the id of ${productId}`,
      error: true,
    });
  }

  // Find a single product from the products hash using the saleId
  static UpdateAProduct(req, res) {
    const productId = req.params.id;
    if (products[productId - 1]) {
      const newProoductDetails = {
        id: productId,
        name: req.body.name,
        price: req.body.price,
        item: req.body.item,
      };

      products[productId - 1] = newProoductDetails;
      return res.status(200)
        .json({
          status: 'Success',
          updatedAProduct: products[productId - 1],
        });
    }

    return res.status(404).json({
      message: ` There is no product with the id of ${productId}`,
      error: true,
    });
  }

  static deleteAProduct(req, res) {
    const productId = req.params.id;
    if (products[productId - 1]) {
      products.splice(productId - 1, 1);
      return res.status(200).json({
        status: 'Success',
        message: `Product with the id of ${productId} deleted successfully`,
      });
    }

    return res.status(404).json({
      message: ` There is no product with the id of ${productId}`,
      error: true,
    });
  }
}

export default ProductsController;