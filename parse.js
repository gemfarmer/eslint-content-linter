const retext = require('retext');
const simplify = require('retext-simplify');
const report = require('vfile-reporter');
const espree = require("espree");
const visit = require('unist-util-visit');

// console.log(espree.parse('var boo = "hoo";\nvar hooo = "hoo";'))

const something;
// module.exports = {
//   parse: (code, options) => {
//     options = options || {};

//     console.log(code, options)
//     // const ast = retext()
//     //   .use(simplify)
//     //   .use((processor) => {
//     //     console.warn('processor!');
//     //     return (tree) => {
//     //       console.warn('tree!');
//     //       visit(tree, (node) => {
//     //         console.warn('node!');
//     //         if (node.position) {
//     //           node.start = node.position.start.offset;
//     //           node.end = node.position.end.offset;
//     //         } else {
//     //           node.start = node.end = -1;
//     //         }
//     //       });
//     //     };
//     //   })
//     //   .parse(code);

//     // ast.tokens = [];
//     // ast.comments = [];
//     // console.log(ast)
//     // return ast;
//     // console.log(log)
//     // console.log(code, options)
//   }
// }
