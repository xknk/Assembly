<!--
 * @Author: Robin LEI
 * @Date: 2021-06-01 16:24:37
 * @LastEditTime: 2021-06-07 11:48:29
 * @FilePath: \Assembly\src\layout\components\Tag\tag.vue
-->
<template>
    <div class="Tag-box">
        <div>
            <router-link v-for="(item, index) in tagRoles" :key='item.path' :to='item.path'>
                <a-tag color="#108ee9" v-if="item.isHome && item.is">
                    {{item.name}}
                </a-tag>
                <a-tag  v-else-if="item.isHome && !item.is">
                    {{item.name}}
                </a-tag>
                <a-tag closable @close.prevent="closeTagFunc(tagRoles[index-1], index, item.is)" v-else-if="!item.is">
                    {{item.name}}
                </a-tag>
                <a-tag color="#108ee9" closable @close.prevent="closeTagFunc(tagRoles[index-1], index, item.is)" v-else>
                    {{item.name}}
                </a-tag>
            </router-link>
        </div>
        <!-- <a-breadcrumb class="breadcrumb—box">
            <a-breadcrumb-item v-for="item in tagRoles" :key='item.path' :class="item.is ? 'selectTag-box' : ''">
                <router-link :to='item.path'>
                    {{item.name}}
                </router-link>
            </a-breadcrumb-item>
        </a-breadcrumb> -->
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from 'vuex'
export default defineComponent({
    setup() {
        
    },
    computed : {
        ...mapGetters(["tagRoles"]),
    },
    watch: {
    },
    mounted () {
    },
    methods: {
        closeTagFunc (route, index, is) {
            this.tagRoles.splice(index,1);
            if (!is && this.tagRoles.length > 1 ) return
            if (route.query) {
                this.$router.push({
                    path: route.path,
                    query: route.query
                })
            } else if (route.params) {
                this.$router.push({
                    path: route.path,
                    params:route.params
                })
            } else {
                this.$router.push({
                    path: route.path,
                })
            }
        }
    }
})
</script>
<style lang='scss'>
    .Tag-box{
        .ant-breadcrumb > span:last-child a{
            color: rgba(0, 0, 0, 0.45); 
        }
        .selectTag-box > .ant-breadcrumb-link a{
            color: #1890ff !important;
        }
    }

</style>
