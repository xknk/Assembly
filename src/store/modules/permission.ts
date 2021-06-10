/*
 * @Author: Robin LEI
 * @Date: 2021-05-28 16:26:30
 * @LastEditTime: 2021-06-08 15:18:43
 * @FilePath: \Assembly\src\store\modules\permission.ts
 */
import router, { asyncRoutes, constantRoutes } from '../../router'
const state = {
    role_path: [],
    addRoutes: []
}
/**
 * @description: 
 * @param {any} RoutesPathArr 旧数组
 * @param {any} RoutesArr 新数组
 * @return {Array}
 */
function isHide(RoutesPathArr: any, RoutesArr: any = []) {
    RoutesPathArr.forEach((item: any) => {
        if (!item.hidden) {
            if (item.children) {
                item.children = isHide(item.children)
            }
            RoutesArr.push(item)
        }
    })
    return RoutesArr
}
/**
 * @description: 
 * @param {never} asyncRoutes 导航数组
 * @param {any} pathArr 当前用户权限数组
 * @return {*}
 */
function filterAsyncRoutes (asyncRoutes: never[], pathArr: any, user_name: string) {
    let RoutesArr = asyncRoutes
    if (user_name === 'admin' && pathArr.length === 1 && pathArr[0] === '/') {
        return [].concat(RoutesArr)
    } else {
        return [].concat(RoutesArr)
    }
}
const mutations = {
    SET_ROLE_PATH: ( state: any, role_path: any) => {
        state.addRoutes = role_path
        state.role_path = isHide(constantRoutes.concat(role_path))
    }
}

const actions = {
    generateRoutes({  commit }: any, pathArr: any, user_name: string) {
        return new Promise(resolve => {
            let accessedRoutes = filterAsyncRoutes(asyncRoutes, pathArr, user_name)
            commit('SET_ROLE_PATH', accessedRoutes)
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

