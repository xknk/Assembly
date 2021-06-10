/*
 * @Author: Robin LEI
 * @Date: 2021-06-08 09:41:27
 * @LastEditTime: 2021-06-08 15:07:36
 * @FilePath: \Assembly\mock\index.ts
 */
import Mock from 'mockjs'
Mock.setup({
    timeout: '200-600'
});
// 使用vite的import.meta.globEager遍历所有mock文件
const modulesFiles = import.meta.globEager('./modules/*.ts')
let modules = {}
for (const key in modulesFiles) {
	const moduleName = key.replace(/(.*\/)*([^.]+).*/ig,"$2")
	modules[moduleName] = modulesFiles[key].default || {}
}
// 注册所有的mock服务
for (const key in modules) {
    Object.keys(modules[key]).length > 0 && modules[key].forEach((item: { url: string | RegExp; type: string; response: any; }) => {
        Mock.mock( item.url, item.type, item.response); 
    });
}