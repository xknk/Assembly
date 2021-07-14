<!--
 * @Author: Robin LEI
 * @Date: 2021-06-10 10:25:07
 * @LastEditTime: 2021-06-28 16:05:42
 * @FilePath: \Assembly\src\views\Assembly\index.vue
-->
<template>
    <div class="Assembly-box">
        <a-card class="list-box">
            <assembly-list @clickAssembly='clickAssemblyFunc' />
        </a-card>
        <a-card class="template-box">
            <assembly-template :assemblyDataObj="assemblyDataObj"  />
        </a-card>
        <a-card class="config-box">
            <assembly-config v-model:assemblyDataObj="assemblyDataObj" />
        </a-card>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import assemblyList from "./components/List/index.vue";
import assemblyTemplate from "./components/Template/index.vue";
import assemblyConfig from "./components/Config/index.vue";
import { echarsDataList } from '../../api/assembly'
export default defineComponent({
    name: "Assembly",
    setup() {},
    components: {
        assemblyList,
        assemblyTemplate,
        assemblyConfig
    },
    data() {
        return {
            assemblyDataObj: {}
        };
    },
    methods: {
        async clickAssemblyFunc(id: String | Number) {
            let { data } = await echarsDataList({
                token: this.$store.getters.token,
                id: id
            });
            this.assemblyDataObj = {
                ...data,
                option:data && data.option ? JSON.parse(data.option) : {},
            }
        },
    }
});
</script>
<style scoped>
.Assembly-box {
    display: flex;
}
.list-box {
    flex: 1;
    height: 6.5rem;
    overflow-y: scroll;
    /* overflow-x: hidden; */
}
.template-box {
    flex: 4;
    height: 6.5rem;
}
.config-box {
    flex: 1;
    height: 6.5rem;
    overflow-y: scroll;
    box-sizing: border-box;
}
::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0.02rem; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0.02rem !important;
}
::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background-color: #1890ff;
}
</style>
<style lang='scss'>
    .Assembly-box{
        .template-box{
            .ant-card-body{
                height: 100%;
            }
        }
        .config-box{
            .ant-card-body{
               padding:  0px 0px 0px 0px;
               height: 100%;
            }
        }
    }
</style>