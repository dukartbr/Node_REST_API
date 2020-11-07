let products = require('../data/products');
const { v4: uuid } = require('uuid');
const { WriteDataToFile, writeDataToFile } = require('../utils');

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    resolve(products.find((product) => product.id === id));
  });
};

const create = (product) => {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuid(), ...product };
    products.push(newProduct);
    writeDataToFile('./data/products.json', products);
    resolve(newProduct);
  });
};

const update = (id, product) => {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = {
      id,
      ...product,
    };

    writeDataToFile('./data/products.json', products);
    resolve(products[index]);
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    products = products.filter((product) => product.id !== id);
    writeDataToFile('./data/products.json', products);
    resolve();
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
