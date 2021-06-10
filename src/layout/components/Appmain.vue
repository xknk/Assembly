<!--
 * @Author: Robin LEI
 * @Date: 2021-05-30 15:13:33
 * @LastEditTime: 2021-06-01 16:22:40
 * @FilePath: \Assembly\src\layout\components\Appmain.vue
-->
<template>
    <a-layout-content class="layout-box">
         <router-view :key="key" v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <keep-alive :include="cachedViews">
                    <component :is="Component"/>
                </keep-alive>
            </transition>
         </router-view>
    </a-layout-content>
</template>
<script lang ='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        return {
            cachedViews: false
        }
    },
    computed: {
        key () {
            return this.$route.path
        }
    },
    mounted () {
    }
})
</script>
<style lang='scss'>
    .ant-layout-content{
        margin:.14rem .16rem .24rem !important;
        padding: .24rem !important;
        background: #fff !important;
        min-height: 2.8rem !important;
    }
</style>
