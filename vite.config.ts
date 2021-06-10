/*
 * @Author: Robin LEI
 * @Date: 2021-05-28 15:22:19
 * @LastEditTime: 2021-06-08 11:55:50
 * @FilePath: \Assembly\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
let port = 8800
export default defineConfig({
	plugins: [
		vue(),
	],
	base: './',
	server: {
		// host: '0.0.0.0',
		// 服务器端口号
		port: port,
		open: true,
		// 自定义代理规则
		proxy: {
			[loadEnv('development', process.cwd()).VITE_APP_BASE]: {
				target: `http://localhost:8800/`,
				changeOrigin: true,
				rewrite: (path) =>
					path.replace(new RegExp(loadEnv('development', process.cwd()).VITE_APP_BASE, 'g'), ''),
			},
		}
	},
	build: {
		// 指定输出路径，默认'dist'
		outDir: 'dist',
		// 指定生成静态资源的存放路径(相对于build.outDir)
		assetsDir: 'assets',
		// 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
		assetsInlineLimit: 4096,
		// 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
		cssCodeSplit: true,
		// 构建后是否生成source map文件，默认false
		sourcemap: false,
		// 为true时，会生成manifest.json文件，用于后端集成
		manifest: false
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"components": path.resolve(__dirname, "src/components"),
			"styles": path.resolve(__dirname, "src/styles"),
			"plugins": path.resolve(__dirname, "src/plugins"),
			"views": path.resolve(__dirname, "src/views"),
			"layouts": path.resolve(__dirname, "src/layouts"),
			"utils": path.resolve(__dirname, "src/utils"),
			"apis": path.resolve(__dirname, "src/apis"),
			"dirs": path.resolve(__dirname, "src/directives"),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					//在此处设置，也可以设置直角、边框色、字体大小等
					//    'primary-color': '#fff',
				},
				javascriptEnabled: true
			}
		}
	}
})