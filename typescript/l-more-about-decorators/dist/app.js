"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// -------- properties decorators
// target refers to the constructor
function LogSample1(target, propertyName) {
    console.log('Property Decorator');
    console.log('Target', target);
    console.log('Property Name', propertyName);
}
class ProductSample1 {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - it must be possitive');
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    LogSample1 // this logger is executed when the class definition is refistered by JS, NOT when the class is intantiated.
], ProductSample1.prototype, "title", void 0);
// -------- accessors, parameters and methods decorators
// property decorator
// target refers to the constructor
function LogSample2(target, propertyName) {
    console.log('Property Decorator');
    console.log('Target', target);
    console.log('Property Name', propertyName);
}
// accesor get/set decorator
function Log2Sample2(target, name, descriptor) {
    console.log('Accessor Decorator');
    console.log('Target', target);
    console.log('Name', name);
    console.log('Descriptor', descriptor);
}
// method decorator
function Log3(target, name, descriptor) {
    console.log('Method Decorator');
    console.log('Target', target);
    console.log('Name', name);
    console.log('Descriptor', descriptor);
}
// parameter decorator
//  name is the method name in which the parameter is used and not the the parameter name
function Log4(target, name, position) {
    console.log('Parameter Decorator');
    console.log('Target', target);
    console.log('Name', name);
    console.log('Position', position);
}
class ProductSample2 {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - it must be possitive');
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    LogSample2 // this logger is executed when the class definition is refistered by JS, NOT when the class is intantiated.
], ProductSample2.prototype, "title", void 0);
__decorate([
    Log2Sample2
], ProductSample2.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], ProductSample2.prototype, "getPriceWithTax", null);
