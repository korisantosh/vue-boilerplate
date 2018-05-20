<template>
  <layout-with-top-menu>
    <div class="container">
      <h2>Hello World</h2>
      <p>
        This boilerpate was created with the goal of simplify the development of Vue applications with TypeScript and all the major libraries for a large app.
      </p>
      <p>
        More information about the project structure can be found on the <a href="https://github.com/kadro/vue-boilerplate">README.md</a> file.
      </p>
      <p>
        If you have any questions or feature requests don't hesitate to open an issue.
      </p>
    </div>
  </layout-with-top-menu>
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
export default class Home extends Vue {

}
</script>
