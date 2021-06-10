/*
 * @Author: Robin LEI
 * @Date: 2021-06-01 16:35:34
 * @LastEditTime: 2021-06-07 11:22:27
 * @FilePath: \Assembly\src\store\modules\tag.ts
 */
import router, { asyncRoutes, constantRoutes } from '../../router'
let pathArr:any = []
constantRoutes.forEach(key => {
    key.path == '/' && pathArr.push({name: key.name, is: false, path: key.redirect, isHome: true})
});
const state = {
    tagRoles: pathArr
}
const mutations = {
    SET_TAGROLES: (state:any , roles: any) => {
        state.tagRoles = roles
    }
}

const actions = {
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}