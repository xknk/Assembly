<!--
 * @Author: Robin LEI
 * @Date: 2021-05-28 17:52:37
 * @LastEditTime: 2021-06-07 11:18:34
 * @FilePath: \Assembly\src\layout\components\Sidebar\item.vue
-->
<template>
    <div>
        <div v-if="hasOneShowingChild(item.children, item)">
            <a-menu-item :key="resolvePath(onlyOneChild.path)">
                <router-link 
                    v-if="isPath(resolvePath(onlyOneChild.path))"
                    target="_blank"
                    rel='noopener'
                    :to="resolvePath(onlyOneChild.path)">
                    <span>{{ item.name }}</span>
                </router-link>
                <router-link 
                    v-else
                    :to="resolvePath(onlyOneChild.path)">
                    <span>{{ item.name }}</span>
                </router-link>
            </a-menu-item>
        </div>
        
        <a-sub-menu v-else :key="resolvePath(item.path)">
            <template #title>
                <span>
                    <span>{{ item.name }}</span>
                </span>
            </template>
            <item
                v-for="childRoute in item.children"
                :key="resolvePath(childRoute.path)"
                :basePath="resolvePath(childRoute.path)"
                :item="childRoute"
            />
        </a-sub-menu>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { isPath } from '../../../utils/validate'
export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
        basePath: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            onlyOneChild: {},
            isPath: isPath
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        hasOneShowingChild(children = [], parent: any) {
            children.filter((item) => {
                this.onlyOneChild = item;
                return true;
            });
            if (children.length === 1 && parent.hideSubset) return true;
            if (children.length === 0) {
                this.onlyOneChild = {
                    ...parent,
                    path: "",
                    noShowingChildren: true,
                };
                return true;
            }
            return false;
        },
        resolvePath(routePath: string) {
            if (isPath(routePath)) {
                return routePath
            }
            if (isPath(this.basePath)) {
                return this.basePath
            }
            if (this.basePath != routePath && routePath != '') {
                let path = (this.basePath +'/'+ routePath).replace(new RegExp('//','g'), '/');
                return path
            }
            return this.basePath
        },
    },
});
</script>
