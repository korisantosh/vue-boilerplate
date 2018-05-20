<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class MenuItem extends Vue {

  @Prop()
  private to: Location;

}
</script>

<style lang="scss" scoped>
a:link, a:visited {
  float: left;
  line-height: 50px;
  padding: 0 10px;
  color: #FFF;
  font-weight: normal;
}

a:hover, .router-link-exact-active {
  background: #616161;
}
</style>
