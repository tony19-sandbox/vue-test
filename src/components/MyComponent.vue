<template>
    <div>
        <h1>{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import config from "@/config";

export default defineComponent({
    computed: {
        title() {
            console.log(config);
            return config.title;
        }
    }
});
</script>

<style lang="scss"></style>
