"use strict";

class Person {
  constructor(name = "", age = 0, sex = "M", weight = 0, height = 0) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
  }
}

const Olga = new Person("Olga", 33, "F");
console.log(Olga);

const George = new Person("George", 30, "M", 70, 180);
console.log(George);

class Person1 {
  constructor(name = "", age = 0, sex = "M", weight = 0, height = 0) {
    this._name = name;
    this._age = age;
    this._sex = sex;
    this._weight = weight;
    this._height = height;
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  set sex(value) {
    this._sex = value;
  }
  set age(value) {
    this._age = value;
  }
  set weight(value) {
    this._weight = value;
  }
  set height(value) {
    this._height = value;
  }
  calculateIMC() {
    let height = Math.pow(this._height / 100, 2);
    let result = this._weigth / height;
    if (result < 20) {
      return -1;
    } else if (20 < result <= 25) {
      return 0;
    } else if (result > 25) {
      return 1;
    }
  }
  isAdult() {
    this._age >= 18 ? 1 : 0;
  }
  checkSex(sex) {
    if (sex !== "M" || sex !== "F") {
      return (this._sex = "M");
    }
  }
  toString() {
    let info = `Person ${this._name} is ${this._sex} ${
      this.age
    } year old and has ${this._weight}, ${this._height}`;
    return info;
  }
  createDNI() {
    var randomNum = (
      Math.pow(10, 8)
        .toString()
        .slice(7) + Math.floor(Math.random() * Math.pow(10, 8) + 1).toString()
    ).slice(-8);
    return randomNum;
  }
}

Person1.sex = "F";
Person1.age = 10;
Person1.weigth = 30;

const Petya = new Person1("Petya", 30, "M", 80, 180);
console.log(Petya);
const Sveta = new Person1("Sveta", 20, "F");
console.log(Sveta);
