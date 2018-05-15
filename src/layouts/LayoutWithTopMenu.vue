<template>
    <div id="main">
        <menu-bar class="menu">
            <div class="logo" slot="header">vue-boilerplate</div>
            <div class="menu-links" slot="links">
                <menu-item :to="{ name: 'home' }">About</menu-item>
                <menu-item :to="{ name: 'typescript' }">TypeScript</menu-item>
                <menu-item :to="{ name: 'vue' }">Vue</menu-item>
            </div>
        </menu-bar>
        <div class="content">
            <slot />
        </div>
        <footer-container class="footer" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import MenuBar from '@/components/menu/MenuBar';
import MenuItem from '@/components/menu/MenuItem';
import FooterContainer from '@/components/footer/FooterContainer';

@Component({
    components: {
        FooterContainer,
        MenuBar,
        MenuItem
    }
})
export default class LayoutWithTopMenu extends Vue {

}
</script>

<style lang="scss">
#main {
    display: flex;
    height: 100vh;
    flex-direction: column;

    .content {
        background: #E0E0E0;
        flex: 1;
        overflow: scroll;
    }
}

.logo {
    line-height: 50px;
    font-size: 1.6em;
    flex: 1 0 auto;
    padding: 0 10px;
}
</style>
