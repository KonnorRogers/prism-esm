export function loader (Prism, options) {
    if (typeof Prism === 'undefined') return
    if (options?.force !== true || Prism.languages['t4-vb']) {
      return
    }
	Prism.languages['t4-vb'] = Prism.languages['t4-templating'].createT4('vbnet');
}