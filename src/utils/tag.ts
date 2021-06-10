/*
 * @Author: Robin LEI
 * @Date: 2021-06-02 09:03:15
 * @LastEditTime: 2021-06-07 11:27:28
 * @FilePath: \Assembly\src\utils\tag.ts
 */
import store from '../store'
/**
 * @description: 生成tag列表
 * @param {any} onlyOneChild
 * @return {*}
 */
export function clickNavFunc (onlyOneChild: {path:any, name:any, query:any, params: any, matched: Array<{path: string, redirect: string}>}) {
    let pathArr : any = []
    let Arr: any = [].concat(store.getters.tagRoles,pathArr)
    let is = Arr.some((key: any)=>key.path == onlyOneChild.path)
    Arr.forEach((key: any)=>{
        if (key.path == onlyOneChild.path && key.name == onlyOneChild.name) {
            key.is = true
        } else {
            key.is = false
        }
    })
    !is && Arr.push(
        {
            name: onlyOneChild.name,
            isHome: false,
            is: true, path: 
            onlyOneChild.path,
            query: Object.keys(onlyOneChild.query).length > 0 ? onlyOneChild.query : null,
            params: Object.keys(onlyOneChild.query).length > 0 ? onlyOneChild.query : null
        }
    )
    store.commit('tag/SET_TAGROLES', Arr)
}