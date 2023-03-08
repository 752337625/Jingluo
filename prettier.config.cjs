// pretter没有对代码的质量进行检查的能力，其只会对代码风格按照指定的规范进行统一，避免一个项目中出现多种不同的代码风格。
/**
 * eslint-config-prettier:让所有可能会与 prettier 规则存在冲突的 eslint rule，失效，并使用prettier的规则进行代码检查。
 * 相当于，用 prettier 的规则，覆盖掉eslint:recommended 的部分规则。 后面 prettier 格式化，也会根据这个规则来。因此，不会再有冲突。注意* 要放到组后面。
 * eslint-plugin-prettier:将 prettier 的能力集成到 eslint 中。按照 prettier 的规则检查代码规范性，并进行修复。
 */
module.exports = {
	printWidth: 100, // 一行最多 120 字符..
	semi: true, //行尾需要有分号
	singleQuote: true, //使用单引号
	tabWidth: 2, // 使用 2 个空格缩进
	useTabs: true, //不使用缩进符，而使用空格 false
	quoteProps: 'as-needed', //"对象的 key 仅在必要时用引号 <as-needed|consistent|preserve>"引用对象中的属性时更改。
	trailingComma: 'all', //末尾需要有逗号 "<es5|none|all>"在多行逗号分隔的句法结构中尽可能打印尾随逗号。
	bracketSpacing: true, //大括号内的首尾需要空格，在对象文字中的括号之间打印空格。
	bracketSameLine: true, //将>多行 HTML（HTML、JSX、Vue、Angular）元素的 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）。
	arrowParens: 'avoid', //"箭头函数，只有一个参数的时候，也需要括号，<always|avoid>"在唯一的箭头函数参数周围包含括号。
	htmlWhitespaceSensitivity: 'strict', //"<css|strict|ignore>"为 HTML、Vue、Angular 和 Handlebars 指定全局空白敏感度。
	vueIndentScriptAndStyle: true, //是否缩进Vue文件中的代码<script>和<style>标签。
	endOfLine: 'lf', // 换行符使用 auto|lf
	embeddedLanguageFormatting: 'auto',
	requirePragma: false, //不需要写文件开头的 @prettier ,设置为true prettier自动格式化失效，必须在要格式化的文件头部添加vue:<!--  @prettier 、js:/***@prettier */等
	insertPragma: false, // 不需要自动在文件开头插入 @prettier
	jsxBracketSameLine: false, //jsx 标签的反尖括号需要换行
	rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
	rangeEnd: Infinity,
	proseWrap: 'preserve',
	// 根据显示样式决定 html 要不要折行
	htmlWhitespaceSensitivity: 'css',
	overrides: [
		{
			files: '.prettierrc',
			options: {
				parser: 'json',
			},
		},
	],
};
