(function () {

function runningInCommonJSEnv () {
	return(
		(typeof require) == "function"
		&&
		(typeof exports) == "object"
		&&
		(typeof module) == "object"
		);
}

if (!runningInCommonJSEnv()) {
	if (!this.Tautologistics)
		this.Tautologistics = {};
	if (!this.Tautologistics.NodeHtmlParser)
		this.Tautologistics.NodeHtmlParser = {};
	if (!this.Tautologistics.NodeHtmlParser.Tests)
		this.Tautologistics.NodeHtmlParser.Tests = [];
	exports = {};
	this.Tautologistics.NodeHtmlParser.Tests.push(exports);
}

exports.name = "Extra spaces in tag";
exports.options = {
	  handler: {}
	, parser: {}
};
exports.html = "<\n font	\n size='14' \n>the text<\n /	\nfont	 \n>";
exports.expected =
[ { raw: '\n font	\n size=\'14\' \n'
  , data: 'font	\n size=\'14\''
  , type: 'tag'
  , name: 'font'
  , attribs: { size: '14' }
  , children:
     [ { raw: 'the text'
       , data: 'the text'
       , type: 'text'
       }
     ]
  }
];

})();
