<!--
 * @Author: Robin LEI
 * @Date: 2021-06-17 14:21:38
 * @LastEditTime: 2021-07-03 17:32:35
 * @FilePath: \Assembly\src\views\Assembly\components\Config\index.vue
-->
<template>
    <div class="assemblyConfig-box">
        <my-form-template v-model:configObj="configObj" v-model:dataObj="dataObj" />
    </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import myFormTemplate from "./components/template.vue"
import { echarsData, echarsOptionData } from "@/api/assembly";
import TemplateConfig from "./components/template"
export default defineComponent({
    name: "assemblyConfig",
    props: {
        assemblyDataObj: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
    components: {
        myFormTemplate
    },
    setup() {
        let configObj = ref([])
        let activeKey = ref("1");
        let dataObj = reactive({
            dataList: reactive([])
        })
        return {
            activeKey,
            dataObj,
            configObj
        };
    },
    data () {
        return {
        }
    },
    watch: {
        assemblyDataObj: {
            deep: true,
            handler (e) {
                this.initEcharsDataFunc(e.type)
                this.configObj = TemplateConfig[e.type + 'Template']
            }
        }
    },
    mounted () {
    },
    methods: {
        async initEcharsDataFunc(type = '') {
            const { data }= await echarsData({
                token: this.$store.getters.token,
                type: type
            });
            this.dataObj.dataList = data
        }
    }
});
</script>
<style lang='scss'>
.assemblyConfig-box {

}
</style>
