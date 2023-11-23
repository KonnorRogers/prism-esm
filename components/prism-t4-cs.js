export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true || Prism.languages['t4-cs']) {
      return
    }
	Prism.languages.t4 = Prism.languages['t4-cs'] = Prism.languages['t4-templating'].createT4('csharp');
}