import { loader as cLoader } from "./prism-c.js"

/**
* @param {import("../prism.js").Prism} Prism
* @param {import("../prism.js").LoaderOptions} [options]
*/
export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true && Prism.languages['objectivec']) {
      return
    }
	if (!Prism.languages.c) {
		cLoader(Prism)
	}
	Prism.languages.objectivec = Prism.languages.extend('c', {
		'string': {
			pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
			greedy: true
		},
		'keyword': /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
		'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
	});

	delete Prism.languages.objectivec['class-name'];

	Prism.languages.objc = Prism.languages.objectivec;
}