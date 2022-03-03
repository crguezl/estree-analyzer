"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThisMode = exports.Function = void 0;
exports.newFunction = newFunction;
const ThisMode = {
  Lexical: 'lexical',
  Strict: 'strict',
  Global: 'global'
};
exports.ThisMode = ThisMode;

class Function {
  constructor(realm, environment, formalParameters, body, strict, arrow) {
    this.realm = realm;
    this.environment = environment;
    this.formalParameters = formalParameters;
    this.body = body;
    this.strict = strict;
    this.thisMode = arrow ? ThisMode.Lexical : strict ? ThisMode.Strict : ThisMode.Global;
    this.homeObject = undefined;
  }

}

exports.Function = Function;

function newFunction(realm, environment, ast, withinStrict = false) {
  const body = ast.body.body;
  const strict = withinStrict || body.length >= 1 && !!body[0].expression && body[0].expression.value === 'use strict';
  const arrow = ast.type === 'ArrowFunctionExpression';
  const result = new Function(realm, environment, ast.params, ast.body, strict, arrow);

  if (ast.id && ast.id.name) {
    result.name = ast.id.name;
  }

  return result;
}