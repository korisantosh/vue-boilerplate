<template>
    <div>
        <h1 @click="clickEvent">Hello World</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {

    clickEvent(): void {
        alert('Click!')
    }

}
</script>
