import { loader as jsonLoader } from "./prism-json.js"

export function loader (Prism) {
	jsonLoader(Prism)

	Prism.languages.jsonp = Prism.languages.extend('json', {
		'punctuation': /[{}[\]();,.]/
	});

	Prism.languages.insertBefore('jsonp', 'punctuation', {
		'function': /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
	});
}