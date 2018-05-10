<template>
    <layout-with-top-menu>
        <h1>Hello World</h1>
    </layout-with-top-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LayoutWithTopMenu from '@/layouts/LayoutWithTopMenu'

@Component({
    components: {
        LayoutWithTopMenu
    }
})
export default class Home extends Vue {

}
</script>
