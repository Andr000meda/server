"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: 'get products'
    });
    // this.app.use(`/api/productos`)
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    res.json({
        msg: 'get Products'
    });
};
exports.getProduct = getProduct;
