const acorn = require('acorn');
//const analyzer = require('estree-analyzer');
const analyzer = require('../lib/index.js');

const expressions = [ `'1 + 2 * 3 = ' + (1 + 2 * 3)`, `null`, `[1,2,3]`, `["hi", "world"]`];

expressions.forEach(code => {
    let expr = acorn.parseExpressionAt(code);
    let analysis = analyzer.analyze(expr);
    console.log(`${code} has type: ${JSON.stringify(analysis, null, 0)}`);
})

let code = `a && a.nested && a.nested.prop`;
let expr = acorn.parseExpressionAt(code);
let scope = new analyzer.Scope();
analyzer.analyze(expr, scope);
console.log(`scope.members for '${code}' is:\n${JSON.stringify(scope.members, null, 2)}`);