import { Prism as OGPrism } from "./prism-core.js"
import { loader as markupLoader } from "./components/prism-markup.js"
import { loader as cssLoader } from "./components/prism-css.js"
import { loader as clikeLoader } from "./components/prism-clike.js"
import { loader as javascriptLoader } from "./components/prism-javascript.js"
import { Plugin as FileHighlightPlugin } from "./plugins/file-highlight/prism-file-highlight.js"

const Prism = OGPrism

// Load initial plugins / languages
markupLoader(Prism)
cssLoader(Prism)
clikeLoader(Prism)
javascriptLoader(Prism)
FileHighlightPlugin(Prism)

export { Prism }