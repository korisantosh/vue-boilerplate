<template>
  <LayoutWithTopMenu>
    <div class="container">
      <h2>What is TypeScript?</h2>
      <p>
        TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
      </p>
      <a href="https://www.typescriptlang.org/community/index.html">Join the TypeScript Community</a>
    </div>
  </LayoutWithTopMenu>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import LayoutWithTopMenu from '@/layouts/LayoutWithTopMenu.vue';

@Component({
  components: {
    LayoutWithTopMenu,
  },
})
export default class VueIntro extends Vue {

}
</script>
