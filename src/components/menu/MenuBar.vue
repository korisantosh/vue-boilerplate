<template>
    <nav>
        <div>
            <slot name="header" />
            <slot name="links"/>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class MenuBar extends Vue {

}
</script>

<style lang="scss" scoped>
nav {
    background: #212121;
    color: #FFF;

    > div {
        width: 1000px;
        display: flex;
        max-width: 100%;
        margin: 0 auto;
    }
}
</style>
