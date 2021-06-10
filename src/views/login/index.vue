<!--
 * @Author: Robin LEI
 * @Date: 2021-06-02 09:31:30
 * @LastEditTime: 2021-06-08 10:14:40
 * @FilePath: \Assembly\src\views\login\index.vue
-->
<template>
    <div class="login-box">
        <div class="form-box">
            <div class="title-box">{{ title }}</div>
            <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-form-item ref="username" name="username">
                    <a-input
                        size="large"
                        v-model:value="formState.username"
                        placeholder="username"
                    >
                        <template #prefix>
                            <User-outlined />
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item ref="password" name="password">
                    <a-input
                        size="large"
                        v-model:value="formState.password"
                        placeholder="password"
                    >
                        <template #prefix>
                            <Lock-outlined />
                        </template>
                    </a-input>
                </a-form-item>
                <div class="button-box">
                    <a-button type="primary" @click="onSubmit" block
                        >登录</a-button
                    >
                </div>
            </a-form>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, reactive, UnwrapRef } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import axios from "axios";
interface FormState {
    username: string;
    password: string;
}
export default defineComponent({
    setup() {
        const formState: UnwrapRef<FormState> = reactive({
            username: "admin",
            password: "123456",
        });
        const rules = {
            username: [
                { required: true, message: "请输入用户名称", trigger: "blur" },
                {
                    min: 3,
                    max: 15,
                    message: "用户名长度应为3-15位长度",
                    trigger: "blur",
                },
            ],
            password: [
                { required: true, message: "请输入密码", trigger: "blur" },
                {
                    min: 6,
                    max: 18,
                    message: "密码长度应为6-18位长度",
                    trigger: "blur",
                },
            ],
        };
        return {
            formState,
            rules,
        };
    },
    data() {
        return {
            title: "自定义可视化系统",
            redirect: "",
            otherQuery: {},
        };
    },
    components: {
        UserOutlined,
        LockOutlined,
    },
    watch: {
        $route: {
            immediate: true,
            handler: function (route) {
                const query = route.query;
                if (query) {
                    this.redirect = query.redirect;
                    this.otherQuery = this.getOtherQuery(query);
                }
            },
        },
    },
    methods: {
        /**
         * @description: 提交表单信息
         * @param {*}
         * @return {*}
         */
        onSubmit() {
            const formRef: any = this.$refs["formRef"];
            formRef
                .validate()
                .then(() => {
                    this.$store
                        .dispatch("user/login", this.formState)
                        .then(() => {
                            this.$router.push({ path: this.redirect || '/home', query: this.otherQuery })
                        }).catch((err) => {});
                })
                .catch(() => {});
            // axios.post("/user/login").then((response: { data: { name: string; age: string; }; }) => {
            //     if (response.data) {
            //         console.log(response.data);
            //     }
            // });
        },
        /**
         * @description: 获取login后的路径与参数
         * @param {*} query
         * @return {Object}
         */
        getOtherQuery(query: { [x: string]: any }) {
            return Object.keys(query).reduce((acc, cur) => {
                if (cur !== "redirect") {
                    acc[cur] = query[cur];
                }
                return acc;
            }, {});
        },
    },
});
</script>
<style lang='scss'>
.login-box {
    min-height: 100vh;
    background-color: #2d3a4b;
    color: #fff;
    .title-box {
        padding-bottom: 0.3rem;
        font-size: 0.3rem;
        text-align: center;
        font-weight: 700;
    }
    .form-box {
        position: relative;
        width: 6rem;
        max-width: 100%;
        padding: 2.2rem 0.35rem 0;
        margin: 0 auto;
        overflow: hidden;
    }
    .ant-form-item {
        width: 100%;
    }
    .ant-input-affix-wrapper {
        background-color: #2d3a4b !important;
        border-radius: 0.08rem;
    }
    .ant-input {
        background-color: #2d3a4b !important;
        color: #fff !important;
    }
    .ant-form-item-control-wrapper {
        width: 100%;
    }
    .ant-input-affix-wrapper .ant-input-prefix,
    .ant-input-affix-wrapper .ant-input-suffix {
        color: #fff;
    }
    .ant-input-affix-wrapper .ant-input-prefix {
        margin-right: 0.14rem;
    }
    .button-box {
        margin-top: 0.4rem;
    }
    .ant-btn-block {
        border-radius: 6px;
    }
}
</style>
