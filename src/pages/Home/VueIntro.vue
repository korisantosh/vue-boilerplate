<template>
    <LayoutWithTopMenu>
        <div class="container">
            <h2>What is Vue.js?</h2>
            <p>
                Vue (pronounced /vjuː/, like <b>view</b>) is a progressive framework for building user interfaces.
                Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.
                On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
            </p>
            <a href="https://vuejs.org/v2/guide/join.html">Join the Vue Community</a>
        </div>
    </LayoutWithTopMenu>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LayoutWithTopMenu from '@/layouts/LayoutWithTopMenu';

@Component({
    components: {
        LayoutWithTopMenu
    }
})
export default class VueIntro extends Vue {

}
</script>
