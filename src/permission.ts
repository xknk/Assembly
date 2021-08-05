/*
 * @Author: Robin LEI
 * @Date: 2021-05-28 17:00:43
 * @LastEditTime: 2021-08-05 16:09:42
 * @FilePath: \vue-arc-demod:\vue\Assembly\src\permission.ts
 */
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import { clickNavFunc } from './utils/tag'
const whiteList: string | string[] = ['/login'];
router.beforeEach(async (to: any, from, next) => {
    const token = store.getters.token
    NProgress.start()
    if (token) {
        const hasRoles = store.getters.role_path && store.getters.role_path.length > 0
        if (hasRoles) {
            clickNavFunc(to)
            NProgress.done()
            next()
        } else {
            try {
                const { role_path, username } = await store.dispatch('user/getInfo')
                const accessRoutes: any = await store.dispatch('permission/generateRoutes', role_path, username)
                router.addRoute(accessRoutes)
                console.log(accessRoutes, 222)
                clickNavFunc(to)
                next({ ...to, replace: true })
                NProgress.done()
            } catch (err) {
                await store.dispatch('user/resetToken')
                next(`/login?redirect=${to.path}`)
                NProgress.done()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})
router.afterEach(() => {
    NProgress.done()
})
