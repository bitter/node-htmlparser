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

exports.name = "Script source in comment";
exports.options = {
	  handler: {}
	, parser: {}
};
exports.html = "<script><!--var foo = 1;--></script>";
exports.expected =
[ { raw: 'script'
  , data: 'script'
  , type: 'script'
  , name: 'script'
  , children: 
     [ { raw: 'var foo = 1;'
       , data: 'var foo = 1;'
       , type: 'comment'
       }
     ]
  }
];

})();
