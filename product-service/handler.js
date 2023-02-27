'use strict';
const productsData = require('./products');

function findProductById(products, id) {
  console.log(products)
  return products[0]
}


module.exports.products = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      productsData,
      null,
      2
    ),
  };
};

module.exports.productsById = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      findProductById(productsData, event.pathParameters.id),
      null,
      2
    ),
  };
};
