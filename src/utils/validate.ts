/*
 * @Author: Robin LEI
 * @Date: 2021-06-01 15:26:55
 * @LastEditTime: 2021-06-01 15:36:40
 * @FilePath: \Assembly\src\utils\validate.ts
 */
/**
 * @description: 
 * @param {string} path
 * @return {Boolean}
 */
export function isPath (path: string) {
    return /^(https?:|mailto:|tel:)/.test(path)
}