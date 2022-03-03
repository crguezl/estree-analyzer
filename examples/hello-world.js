import * as acorn from 'acorn'
//const analyzer = require('estree-analyzer');
import * as analyzer  from  '../src/index.mjs';
//const acorn = require('acorn');
//const analyzer = require('../lib/index.js');

//const analyzer = require('estree-analyzer');

const expressions = [ `'1 + 2 * 3 = ' + (1 + 2 * 3)`, `null`, `[1,2,3]`, `["hi", "world"]`];

expressions.forEach(code => {
    let expr = acorn.parseExpressionAt(code, 0, { ecmaVersion: 2022});
    let analysis = analyzer.analyze(expr);
    console.log(`${code} has type: ${JSON.stringify(analysis, null, 0)}`);
})

let code = `a && a.nested && a.nested.prop`;
let expr = acorn.parseExpressionAt(code, 0, { ecmaVersion: 2022});
let scope = new analyzer.Scope();
analyzer.analyze(expr, scope);
console.log(`scope.members for '${code}' is:\n${JSON.stringify(scope.members, null, 2)}`);
