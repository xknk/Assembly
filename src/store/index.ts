import { createStore } from 'vuex'
import getters from './getters'
const modulesFiles = import.meta.globEager('./modules/*.ts')
let modules = {}
for (const key in modulesFiles) {
	const moduleName = key.replace(/(.*\/)*([^.]+).*/ig,"$2")
	modules[moduleName] = modulesFiles[key].default
}
const store = createStore({
	modules,
	getters,
})
export default store