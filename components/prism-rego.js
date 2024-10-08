/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['rego']) {
      return
    }
	// https://www.openpolicyagent.org/docs/latest/policy-reference/

	Prism.languages.rego = {
		'comment': /#.*/,
		'property': {
			pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
			lookbehind: true,
			greedy: true
		},
		'string': {
			pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
			lookbehind: true,
			greedy: true
		},

		'keyword': /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,
		'boolean': /\b(?:false|true)\b/,

		'function': {
			pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
			inside: {
				'namespace': /\b\w+\b(?=\s*\.)/,
				'punctuation': /\./
			}
		},

		'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
		'operator': /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
		'punctuation': /[,;.\[\]{}()]/
	};
}