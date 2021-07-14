<!--
 * @Author: Robin LEI
 * @Date: 2021-06-18 09:17:35
 * @LastEditTime: 2021-07-03 17:11:53
 * @FilePath: \Assembly\src\views\Assembly\components\Config\components\template.vue
-->
<template>
    <div class="config-template-box">
        <div v-for="(item, index) in configObj" :key='index'>
            <a-collapse v-model:activeKey="activeKey" accordion  v-if="item.type === 'collapse'"  @change="item.emits.change ? item.emits.change($event,childrenItem,dataObj) : ()=>{}">
                <a-collapse-panel :key="index + ''" :header="item.lable" class="data_box">
                    <a-form :label-col="labelCol" :wrapper-col="wrapperCol" v-for="(childrenItem, index) in item.children" :key='index'>
                        <a-form-item :label="childrenItem.lable">
                            <a-select
                                v-model:value="childrenItem.value"
                                placeholder="please select your zone"
                                size="small"
                                @change="childrenItem.emits.change($event,childrenItem,dataObj)"
                            >
                                <a-select-option
                                    v-for="selectItem in dataObj[childrenItem.dataKey]"
                                    :key="selectItem[childrenItem.valueKey]"
                                    :value="selectItem[childrenItem.valueKey]"
                                    
                                    >{{ selectItem[childrenItem.namekey]}}</a-select-option
                                >
                            </a-select>
                        </a-form-item>
                    </a-form>
                </a-collapse-panel>
            </a-collapse>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    props: {
        configObj: {
            default: [],
            require: true,
            type: Array
        },
        dataObj: {
            default: ()=>{},
            require: true,
            type: Object
        }
    },
    setup() {
        let activeKey = ref(['0'])
        return {
            activeKey,
            labelCol: { span: 8 },
            wrapperCol: { span: 15 },
        }
    },
    mounted() {
    },
    watch: {
    },
    methods: {
        select () {
            console.log(this.configObj, 2222)
        }
    }
});
</script>
<style lang='scss'>
.config-template-box {
    .ant-collapse {
        background-color: #fcfcfc;
        border: 0px;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        line-height: 0.15rem;
    }
    .ant-collapse > .ant-collapse-item {
        border-bottom: 1px solid #eee;
    }
    .ant-collapse-content {
        border-top: 1px solid #eee;
    }
    .ant-collapse-content > .ant-collapse-content-box {
        padding: 0.1rem 0rem;
    }
    .ant-collapse-item {
        font-size: 0.12rem;
    }
    .ant-form{
        padding: 0px 0.1rem;
    }
    .ant-select{
        width: 100%;
        // width: 1.55rem;
    }
    .data_box{
        .ant-collapse-content {
            height: .7rem;
        }
    }
}
</style>