import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'

export const constantRoutes = [
    {
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		hidden: true//不在左侧导航栏显示
	},
    {
        path: '/404',
        component: () => import('@/views/404.vue'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,//指定文件
        redirect: '/home',//重定向到home
        name: '首页',
        hideSubset: true,
        children: [//子目录
            {
                path: '/home',
                component: () => import('@/views/Home/index.vue'),
                name: '首页',
                meta: { title: '首页', icon: 'international', affix: true }
            }
        ]
    }
];
export const asyncRoutes: any = [
    {
        path: '/Admin',
        component: Layout,//指定文件
        redirect: '/Admin/index',//重定向到home
        name: '系统管理',
        hideSubset: false,
        children: [//子目录
            {
                path: 'index',
                component: () => import('@/views/SetUp/Admin/index.vue'),
                name: '管理员列表',
                meta: { title: '管理员列表', icon: 'international', affix: true }
            },
            {
                path: 'role',
                component: () => import('@/views/SetUp/Role/index.vue'),
                name: '角色列表',
                meta: { title: '角色列表', icon: 'international', affix: true }
            },
        ]
    },
    // {
    //     path: '/Config',
    //     component: Layout,//指定文件
    //     redirect: '/Config/index',//重定向到home
    //     name: '配置管理',
    //     hideSubset: false,
    //     children: [//子目录
    //         {
    //             path: 'index',
    //             component: () => import('@/views/Config/index.vue'),
    //             name: '配置列表',
    //             meta: { title: '管理员列表', icon: 'international', affix: true }
    //         }
    //     ]
    // },
    // {
    //     path: '/Level',
    //     component: Layout,//指定文件
    //     redirect: '/Level/Levels/index',//重定向到home
    //     name: '等级管理',
    //     hideSubset: false,
    //     children: [//子目录
    //         {
    //             path: 'Levels',
    //             redirect: '/Level/Levels/index',//重定向到home
    //             name: '等级管理1',
    //             hideSubset: false,
    //             component: () => import('@/views/Level/index.vue'),
    //             children: [//子目录
    //                 {
    //                     path: 'index',
    //                     component: () => import('@/views/Level/index.vue'),
    //                     name: '等级管理列表',
    //                     meta: { title: '等级管理列表', icon: 'international', affix: true }
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'Configs',
    //             redirect: '/Level/Configs/index',//重定向到home
    //             name: '等级列表',
    //             hideSubset: false,  
    //             component: () => import('@/views/Level/Level.vue'),
    //             children: [//子目录
    //                 {
    //                     path: 'index',
    //                     component: () => import('@/views/Level/Level.vue'),
    //                     name: '等级列表2',
    //                     meta: { title: '等级列表2', icon: 'international', affix: true }
    //                 }
    //             ]
    //         },
    //     ]
    // },
    {   path: "/:pathMatch(.*)*", redirect: '/404', hidden: true }
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: ()=> ({ top: 0 }),
    routes: constantRoutes.concat([], asyncRoutes)
})
export default router