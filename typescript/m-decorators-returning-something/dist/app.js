"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggerSample5(logString) {
    console.log('Logger One Factory');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function Logger2Sample5(logString) {
    console.log('Logger Two Factory');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplateSample5(template, hookId) {
    console.log('WithTemplateSample5');
    return function (originalContructor) {
        // return a new originalContructor function which will replace the old one. So, it will replace the class to which you added the decorator.
        return class extends originalContructor {
            // constructor(...args: any[]){
            constructor(..._) {
                super();
                // const person = new originalContructor()
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let PersonSample5 = class PersonSample5 {
    constructor() {
        this.name = 'Carlos';
        console.log('Creating person object');
    }
};
PersonSample5 = __decorate([
    Logger2Sample5('Logger Two'),
    LoggerSample5('Logger One'),
    WithTemplateSample5('<h1>Template Content</h1>', 'app')
], PersonSample5);
const pSample5 = new PersonSample5();
