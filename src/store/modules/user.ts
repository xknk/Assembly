/*
 * @Author: Robin LEI
 * @Date: 2021-05-28 15:31:32
 * @LastEditTime: 2021-06-08 14:36:44
 * @FilePath: \Assembly\src\store\modules\user.ts
 */
import { login } from '../../api/user'
// logout, getInfo
import { getCokie, setCokie, removeCokie } from '../../utils/auth'
const state = {
    token: getCokie('token'),
    user_name: '',
    avatar: '',
    user_role_path: []
}

const mutations = {
    SET_TOKEN: (state: any, token: string) => {
        state.token = token
    },
    SET_USER_NAME: (state: any, user_name: string) => {
        state.user_name = user_name
    },
    SET_AVATAR: (state: any, avatar: any) => {
        state.avatar = avatar
    },
    SET_USER_ROLE_PATH: (state: any, user_role_path: any) => {
        state.user_role_path = user_role_path
    }
}

const actions = {
    /**
     * @description: 登录页面
     * @param {any} commit
     * @param {object} userInfo
     * @return {object}
     */
    login({ commit }: any, userInfo: { username: string; password: string }) {
        const { username, password } = userInfo
        return new Promise<void>((resolve, reject) => {
            login({ username: username.trim(), password: password }).then((response: { data: any }) => {
                const { role_path, token, username, avatar } = response.data
                commit('SET_USER_ROLE_PATH', role_path)
                commit('SET_USER_NAME', username)
                commit('SET_AVATAR', avatar)
                commit('SET_TOKEN', token)
                setCokie('token', token)
                setCokie('userinfo', JSON.stringify(response.data))
                resolve(response.data)
            }).catch((error: any) => {
                reject(error)
            })
        })
    },

    // // get user info
    getInfo({ commit }: any) {
        return new Promise<void>((resolve, reject) => {
            const data = getCokie('userinfo') || ''
            const { role_path, token, username, avatar } = JSON.parse(data)
            commit('SET_USER_ROLE_PATH', role_path)
            commit('SET_USER_NAME', username)
            commit('SET_AVATAR', avatar)
            commit('SET_TOKEN', token)
            setCokie('token', token)
            resolve(JSON.parse(data))
        })
    },
    // // remove token
    /**
     * @description: 删除token
     * @param {any} commit
     * @return {object} 
     */
    resetToken({ commit }: any) {
        return new Promise<void>(resolve => {
            commit('SET_TOKEN', '')
            removeCokie('token')
            resolve()
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
function dispatch(arg0: string, roles: any, arg2: { root: boolean }): any {
    throw new Error('Function not implemented.')
}

function roles(arg0: string, roles: any, arg2: { root: true }): any {
    throw new Error('Function not implemented.')
}

function commit(arg0: string, arg1: string) {
    throw new Error('Function not implemented.')
}

