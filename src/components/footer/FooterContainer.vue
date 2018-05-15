<template>
    <footer>
        <div class="left">
            <a class="join-vue" href="https://vuejs.org/v2/guide/join.html">Join Vue Community!</a>
        </div>
        <div class="right">
            <a href="https://github.com/kadro/vue-boilerplate" class="github" />
            <a href="https://vuejs.org/" class="vue" />
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class FooterContainer extends Vue {

}
</script>

<style lang="scss" scoped>
footer {
    padding: 10px;
    background: #424242;
    color: #FFF;
    display: flex;

    div.right {
        a {
            display: block;
            float: left;
        }
    }

    div.left {
        flex: 1 0 auto;

        .join-vue {
            color: #FFF;
            line-height: 35px;
        }
    }

    .github, .vue {
        width: 35px;
        height: 35px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 35px 35px;
        margin-left: 10px;
    }

    .github {
        background-image: url('../../assets/images/github.svg');
    }

    .vue {
        background-image: url('../../assets/images/vue.png');
    }
}
</style>
