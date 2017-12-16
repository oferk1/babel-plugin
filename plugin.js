import babylon from "babylon";
const traverse = require("babel-traverse").default;;

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, {
    enter(path) {
        if (
            path.node.type === "Identifier" &&
            path.node.name === "n"
        ) {
            path.node.name = "x";
        }
    }
});