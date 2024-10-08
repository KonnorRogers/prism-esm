/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['smalltalk']) {
      return
    }
	Prism.languages.smalltalk = {
		'comment': {
			pattern: /"(?:""|[^"])*"/,
			greedy: true
		},
		'char': {
			pattern: /\$./,
			greedy: true
		},
		'string': {
			pattern: /'(?:''|[^'])*'/,
			greedy: true
		},
		'symbol': /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
		'block-arguments': {
			pattern: /(\[\s*):[^\[|]*\|/,
			lookbehind: true,
			inside: {
				'variable': /:[\da-z]+/i,
				'punctuation': /\|/
			}
		},
		'temporary-variables': {
			pattern: /\|[^|]+\|/,
			inside: {
				'variable': /[\da-z]+/i,
				'punctuation': /\|/
			}
		},
		'keyword': /\b(?:new|nil|self|super)\b/,
		'boolean': /\b(?:false|true)\b/,
		'number': [
			/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
			/\b\d+(?:\.\d+)?(?:e-?\d+)?/
		],
		'operator': /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
		'punctuation': /[.;:?\[\](){}]/
	};
}