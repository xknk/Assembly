/*
 * @Author: Robin LEI
 * @Date: 2021-05-28 15:22:19
 * @LastEditTime: 2021-06-02 16:25:25
 * @FilePath: \Assembly\src\shims-vue.d.ts
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'nprogress';