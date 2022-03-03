"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Realm = void 0;
exports.newRealm = newRealm;

var _environment = require("../model/environment.mjs");

class Realm {
  constructor(globalObject, globalEnv) {
    this.globalObject = globalObject;
    this.globalEnv = globalEnv;
  }

}

exports.Realm = Realm;

function newRealm(globalObject, thisValue = globalObject) {
  const globalEnv = (0, _environment.newGlobalEnvironment)(globalObject, thisValue);
  return new Realm(globalObject, globalEnv);
}