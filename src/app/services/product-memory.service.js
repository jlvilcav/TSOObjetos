"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ProductMemoryService = void 0;
var faker_1 = require("@faker-js/faker");
var ProductMemoryService = /** @class */ (function () {
    function ProductMemoryService() {
        this.products = [];
    }
    ProductMemoryService.prototype.create = function (data) {
        var newProduct = __assign(__assign({}, data), { id: faker_1.faker.datatype.number(), category: {
                id: data.categoryId,
                name: faker_1.faker.commerce.department(),
                image: faker_1.faker.image.imageUrl()
            } });
        return this.add(newProduct);
        ;
    };
    ProductMemoryService.prototype.add = function (product) {
        this.products.push(product);
        return product;
    };
    ProductMemoryService.prototype.update = function (id, changes) {
        var index = this.products.findIndex(function (item) { return item.id === id; });
        var prevData = this.products[index];
        this.products[index] = __assign(__assign({}, prevData), changes);
        return this.products[index];
    };
    ProductMemoryService.prototype.findOne = function (id) {
        return this.products.find(function (item) { return item.id === id; });
    }; //findOne
    ProductMemoryService.prototype.getAll = function () {
        return this.products;
    }; //getAll
    return ProductMemoryService;
}());
exports.ProductMemoryService = ProductMemoryService;
