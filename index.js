var inspect = require("unist-util-inspect");
var English = require("parse-english");

var search = require("nlcst-search");
var toString = require("nlcst-to-string");

var treeInitial = {
  type: "SentenceNode",
  children: [
    {
      type: "WordNode",
      children: [
        { type: "TextNode", value: "Don" },
        { type: "PunctuationNode", value: "’" },
        { type: "TextNode", value: "t" },
      ],
    },
    { type: "WhiteSpaceNode", value: " " },
    {
      type: "WordNode",
      children: [{ type: "TextNode", value: "do" }],
    },
    { type: "WhiteSpaceNode", value: " " },
    {
      type: "WordNode",
      children: [
        { type: "TextNode", value: "Block" },
        { type: "PunctuationNode", value: "-" },
        { type: "TextNode", value: "level" },
      ],
    },
  ],
};

var tree = new English().parse("I want create few buttons with the code ");

// console.log(inspect(tree));

search(tree, ["Butto ns"], function (nodes) {
  console.log(toString(nodes));
});
// `Don’t`

search(tree, ["creatEb", "createss"], function (nodes) {
  console.log(toString(nodes));
});
// `do Block-level`
