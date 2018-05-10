<template>
    <div>
        <menu-bar>
            <div class="logo" slot="header">vue-boilerplate</div>
            <div class="menu-links" slot="links">
                <menu-item :to="{ name: 'home' }">About</menu-item>
                <menu-item :to="{ name: 'typescript' }">TypeScript</menu-item>
                <menu-item :to="{ name: 'vue' }">Vue</menu-item>
            </div>
        </menu-bar>
        <slot />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import MenuBar from '@/components/menu/MenuBar';
import MenuItem from '@/components/menu/MenuItem';

@Component({
    components: {
        MenuBar,
        MenuItem
    }
})
export default class LayoutWithTopMenu extends Vue {

}
</script>

<style lang="scss">
.logo {
    line-height: 50px;
    font-size: 1.6em;
    flex: 1 0 auto;
}

.menu-links {
    flex: 0 1 1;
}
</style>
