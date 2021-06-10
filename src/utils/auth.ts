/*
 * @Author: Robin LEI
 * @Date: 2021-06-02 10:21:51
 * @LastEditTime: 2021-06-08 14:33:11
 * @FilePath: \Assembly\src\utils\auth.ts
 */
/**
 * @description: 获取localStorage
 * @param {string} key
 * @return {*}
 */
export function  getCokie(key: string) {
    return localStorage.getItem(key)
}
/**
 * @description: 设置localStorage
 * @param {string} key
 * @param {string} value
 * @return {*}
 */
export function  setCokie(key: string, value: string) {
    return localStorage.setItem(key, value)
}
/**
 * @description: 删除localStorage
 * @param {string} key
 * @return {*}
 */
export function  removeCokie(key: string) {
    return localStorage.removeItem(key)
}