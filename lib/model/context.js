"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutionContext = void 0;
exports.newExecutionContext = newExecutionContext;

class ExecutionContext {
  constructor(realm, variableEnvironment, lexicalEnvironment) {
    this.realm = realm;
    this.variableEnvironment = variableEnvironment;
    this.lexicalEnvironment = lexicalEnvironment;
    this.strict = false;
  }

  setEnvironment(env) {
    this.variableEnvironment = env;
    this.lexicalEnvironment = env;
  }

}

exports.ExecutionContext = ExecutionContext;

function newExecutionContext(realm) {
  return new ExecutionContext(realm, realm.globalEnv, realm.globalEnv);
}