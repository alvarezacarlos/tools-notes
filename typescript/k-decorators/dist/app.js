"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ******  decorator
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = 'Carlos';
        console.log('Creating person object');
    }
};
Person = __decorate([
    Logger
], Person);
const pSample = new Person();
// ******  decorator FACTORY
function LoggerSample2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let PersonSample2 = class PersonSample2 {
    constructor() {
        this.name = 'Carlos';
        console.log('Creating person object');
    }
};
PersonSample2 = __decorate([
    LoggerSample2('LOGGIN - PERSON')
], PersonSample2);
const pSample2 = new PersonSample2();
// ******  Building more useful decorators
function WithTemplateSample3(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
let PersonSample3 = class PersonSample3 {
    constructor() {
        this.name = 'Carlos';
        console.log('Creating person object');
    }
};
PersonSample3 = __decorate([
    WithTemplateSample3('<h1>Template Content</h1>', 'app')
], PersonSample3);
const pSample3 = new PersonSample3();
// ******  Building more useful decorators
function WithTemplateSample4(template, hookId) {
    return function (constructor) {
        const person = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = person.name;
        }
    };
}
let PersonSample4 = class PersonSample4 {
    constructor() {
        this.name = 'Carlos';
        console.log('Creating person object');
    }
};
PersonSample4 = __decorate([
    WithTemplateSample4('<h1>Template Content</h1>', 'app')
], PersonSample4);
const pSample4 = new PersonSample4();
// ******  Multiple decorators
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
    return function (constructor) {
        const person = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = person.name;
        }
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
