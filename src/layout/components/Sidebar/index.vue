<!--
 * @Author: Robin LEI
 * @Date: 2021-05-28 17:52:32
 * @LastEditTime: 2021-06-08 15:51:27
 * @FilePath: \Assembly\src\layout\components\Sidebar\index.vue
-->
<template>
    <a-layout-sider
            v-model:collapsed="collapsed"
            :trigger="null"
            collapsible
        >
            <div class="logo" />
            <a-menu
                :forceSubMenuRender='true'
                mode="inline"
                theme="dark"
                v-model:selectedKeys="selectedKeys"
                :openKeys="openKeys"
                @openChange="titleClick"
            >
                <Item v-for="route in role_path" 
                    :key="route.path == '/' ? route.redirect : route.path "
                    :item="route"
                    :base-path="route.path == '/' ? route.redirect : route.path"
                />
            </a-menu>
        </a-layout-sider>
</template>
<script lang="ts">

import { mapGetters } from "vuex";
import { defineComponent, ref,  } from "vue";
import Item from '@/layout/components/Sidebar/item.vue'
import { useRoute } from "vue-router";
export default defineComponent({
    props: {
        collapsed: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const route = useRoute();
        let openKeys = ref<string[]>(levelNav(route.path, []))
        let PATH = route.path
        let selectedKeys = ref<string[]>([PATH])
        return {
            selectedKeys,
            openKeys,
            levelNav
        }
        function levelNav (path: string, Arr:string[] = []) {
            let pathArr = path.split('/')
            pathArr.reduce((x,y)=>{
                Arr.push(x+'/'+y)
                return x+'/'+y
            })
            return Arr
        }
    },
    data () {
        return {
        }
    },
    components: {
        Item
    },
    computed: {
        ...mapGetters(["role_path"]),
    },
    watch: {
        selectedKeys(e) {
            if (e[0] == '/') this.openKeys = ['/']
        },
        $route (route) {
            this.openKeys = this.levelNav(route.path, [])
            this.selectedKeys = [route.path]
        }
    },
    mounted () {
    },
    methods: {
        titleClick (openKeys: string[]) {
            let pathArr: string[] = []
            if (openKeys[openKeys.length - 1]) {
                if (this.openKeys.length > openKeys.length) {
                    pathArr = openKeys
                } else {
                    let path = openKeys[openKeys.length - 1].split('/')[1]
                    this.openKeys.forEach(key=>{
                        if (key.indexOf(path) != -1) {
                            pathArr.push(key)
                        }
                    });
                    pathArr.push(openKeys[openKeys.length - 1])
                }
            }
            this.openKeys = pathArr
        },
    }
})
</script>
