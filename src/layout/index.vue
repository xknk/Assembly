<!--
 * @Author: Robin LEI
 * @Date: 2021-05-28 15:37:01
 * @LastEditTime: 2021-06-08 14:39:16
 * @FilePath: \Assembly\src\layout\index.vue
-->
<template>
    <a-layout class="layout_box">
        <Sidebar :collapsed="collapsed" />
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <div class="header-box">
                    <menu-unfold-outlined
                        v-if="collapsed"
                        class="trigger"
                        @click="() => (collapsed = !collapsed)"
                    />
                    <menu-fold-outlined
                        v-else
                        class="trigger"
                        @click="() => (collapsed = !collapsed)"
                    />
                    <div class="avatar-box">
                        <a>
                            <a-popover
                                v-model:visible="showPopover"
                                trigger="click"
                            >
                                <template #content>
                                    <a @click="signOutFunc" class="sign-out-box">
                                        <LoginOutlined />    退出登录
                                    </a>
                                </template>
                                <a-avatar
                                    size="large"
                                    :src="avatar"
                                />
                            </a-popover>
                        </a>
                    </div>
                </div>
            </a-layout-header>
            <Tag class="breadcrumb—box" />
            <Appmain />
        </a-layout>
    </a-layout>
</template>
<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined, LoginOutlined } from "@ant-design/icons-vue";
import Sidebar from "@/layout/components/Sidebar/index.vue";
import Appmain from "@/layout/components/Appmain.vue";
import Tag from "@/layout/components/Tag/tag.vue";
import { defineComponent, ref } from "vue";
import { message } from 'ant-design-vue';
import { mapGetters } from "vuex";
export default defineComponent({
    setup() {
        return {
            collapsed: ref<boolean>(false),
            showPopover:ref<boolean>(false)
        };
    },
    computed: {
        ...mapGetters(["avatar"]),
    },
    mounted() {},
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        Sidebar,
        Tag,
        Appmain,
        DownOutlined,
        LoginOutlined
    },
    methods: {
        signOutFunc () {
            this.$store.dispatch('user/resetToken')
            this.$router.push('/login')
            message.success('退出成功')
        }
    }
});
</script>
<style lang='scss'>
.layout_box {
    min-height: 100vh;
    .trigger {
        font-size: 32px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }
    .trigger:hover {
        color: #1890ff;
    }
    .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.3);
        margin: 16px;
    }
    .site-layout .site-layout-background {
        background: #fff;
    }
    .breadcrumb—box {
        margin: 0.1rem 0.24rem 0rem;
    }
    .header-box {
        display: flex;
        justify-content: space-between;
    }
    .avatar-box {
        padding: 0rem 0.35rem;
    }
}
</style>
<style scoped>
.sign-out-box{
    color: #111;
}
.sign-out-box:hover{
    color: #1890ff;
}
</style>