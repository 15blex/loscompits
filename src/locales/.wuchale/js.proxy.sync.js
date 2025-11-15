
            import * as _w_c_js_0_ from './main.main.es.compiled.js'
import * as _w_c_js_1_ from './main.main.ca.compiled.js'
import * as _w_c_js_2_ from './main.main.fr.compiled.js'
import * as _w_c_js_3_ from './main.main.pt.compiled.js'
import * as _w_c_js_4_ from './main.main.it.compiled.js'
import * as _w_c_js_5_ from './main.main.de.compiled.js'
import * as _w_c_js_6_ from './main.main.en.compiled.js'
            /** @type {{[loadID: string]: {[locale: string]: import('wuchale/runtime').CatalogModule}}} */
            const catalogs = {js: {es: _w_c_js_0_,ca: _w_c_js_1_,fr: _w_c_js_2_,pt: _w_c_js_3_,it: _w_c_js_4_,de: _w_c_js_5_,en: _w_c_js_6_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => catalogs[loadID][locale]
            export const loadIDs = ['js']
        