module.exports = {
  printWidth: 100,
  tabWidth: 2, //指定每个缩进级别的空格数。
  useTabs: false, //用制表符代替空格缩进行。
  semi: false, //在语句的末尾打印分号。
  vueIndentScriptAndStyle: true,
  singleQuote: true, //使用单引号而不是双引号。
  quoteProps: "as-needed", //当对象中的属性被引用时改变。
  bracketSpacing: true, //在对象文本中在括号之间打印空格。
  trailingComma: "none", //多行时，尽可能在后面打印逗号。(例如，单行数组的末尾永远不会有逗号。)
  jsxBracketSameLine: false,
  jsxSingleQuote: false, //在JSX中使用单引号而不是双引号
  arrowParens: "always", //在箭头函数参数周围包含圆括号。
  insertPragma: false,
  requirePragma: false,
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict",
  endOfLine: "crlf",
  overrides: [
    {
      files: "*.md",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
