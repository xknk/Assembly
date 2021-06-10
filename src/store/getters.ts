/*
 * @Author: Robin LEI
 * @Date: 2021-05-28 15:31:32
 * @LastEditTime: 2021-06-08 14:13:14
 * @FilePath: \Assembly\src\store\getters.ts
 */
const getters = {
    user_name: (state: any) => state.user.user_name,
    token: (state: any) => state.user.token,
    user_role_path: (state: any) => state.user.user_role_path,
    avatar: (state: any) => state.user.avatar,
    role_path: (state: any) => state.permission.role_path,
    tagRoles: (state: any) => state.tag.tagRoles
}
export default getters